FROM ubuntu:18.04

MAINTAINER Hoan&lt;phamduyhoan95@gmail.com&gt;

RUN apt-get update && apt-get install -y \
        software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update && apt-get install -y \
    python3.8 \
    python3-pip
RUN python3.8 -m pip install pip
RUN apt-get update && apt-get install -y \
    python3-distutils \
    python3-setuptools
RUN python3.8 -m pip install pip --upgrade pip

COPY . /projects/sample_web_docker

ENV PYTHONPATH  "/projects/"

# RUN rbenv # check if it works...
RUN echo $PYTHONPATH
RUN file="$(ls -1 .)" && echo $file
RUN /usr/bin/python3.8 -m pip install -r /projects/sample_web_docker/requirements.txt
RUN chmod a+x /projects/sample_web_docker/run.sh
ENTRYPOINT ["./projects/sample_web_docker/run.sh"]
#  ENTRYPOINT [ "/bin/bash" ]
EXPOSE 8080
