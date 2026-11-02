#!/usr/bin/env bash

docker build . -t lzb-moe-frontend
docker image tag lzb-moe-frontend:latest registry.walruslab.org/pub/lzb-moe-frontend:latest
docker push registry.walruslab.org/pub/lzb-moe-frontend:latest

