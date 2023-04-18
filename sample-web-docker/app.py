import sys

from flask import Flask

app = Flask(__name__)

@app.route("/")
def handleRoot():
    return "Hello from handleRoot"
