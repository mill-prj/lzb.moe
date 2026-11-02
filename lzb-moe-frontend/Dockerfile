FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build


# Unprivileged nginx terminates TLS with a certificate mounted at /tls
# (tls.crt + tls.key) and proxies /api/ to the backend service.
FROM docker.io/nginxinc/nginx-unprivileged:1.29-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080 8443
