import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, RemoteBackend} from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    console.log(process.env.AWS_DEFAULT_REGION)
    console.log(process.env.AWS_ACCESS_KEY_ID)
    console.log(process.env.AWS_SECRET_ACCESS_KEY)
    new AwsProvider(this, "AWS", {
      region: process.env.AWS_DEFAULT_REGION,
      accessKey: process.env.AWS_ACCESS_KEY_ID,
      secretKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    const ec2Instance = new Instance(this, "compute", {
      ami: "ami-0b1217c6bff20e276",
      instanceType: "t2.micro",
    });

    new TerraformOutput(this, "public_ip", {
      value: ec2Instance.publicIp,
    });
  }
}

const app = new App();
const stack = new MyStack(app, "aws_instance_2");

new RemoteBackend(stack, {
  hostname: "app.terraform.io",
  organization: "example-org-2fccb7",
  workspaces: {
    name: "learn-cdktf2",
  },
});

app.synth();
