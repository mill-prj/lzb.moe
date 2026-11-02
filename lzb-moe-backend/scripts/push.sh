#!/usr/bin/env bash

docker build . -t lzb-moe-backend
docker image tag lzb-moe-backend:latest registry.walruslab.org/pub/lzb-moe-backend:latest
docker push registry.walruslab.org/pub/lzb-moe-backend:latest

