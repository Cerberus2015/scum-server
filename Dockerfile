FROM node:latest
MAINTAINER Filipe Dobreira <dobreira@gmail.com>

ADD . /scum
WORKDIR /scum

RUN npm install
CMD ["npm", "start"]
