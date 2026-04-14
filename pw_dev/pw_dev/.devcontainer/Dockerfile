#ARG VARIANT="3.18"
#FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}
FROM yobasystems/alpine-nginx:stable
# ** [Optional] Uncomment this section to install additional packages. **
RUN apk update \
     && apk add --no-cache --update nodejs npm bash nginx

#RUN rm -rf /usr/share/nginx/html
#RUN ln -s /workspaces/pw /usr/share/nginx/html