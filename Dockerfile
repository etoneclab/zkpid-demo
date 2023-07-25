FROM node:18-alpine as builder

ARG REACT_APP_API_URL=test

ENV REACT_APP_API_URL=$REACT_APP_API_URL

WORKDIR /react-frontend
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package.json  /react-frontend/

RUN yarn install

COPY ./ /react-frontend/

EXPOSE 3000

CMD ["yarn", "dev"]