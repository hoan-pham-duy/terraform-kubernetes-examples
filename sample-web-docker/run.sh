#!/bin/sh
cd /projects/sample_web_docker/
gunicorn --bind 0.0.0.0:8080 --worker-class=sync --log-level=debug --timeout 5 wsgi_app:app
