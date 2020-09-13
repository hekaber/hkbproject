FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy and install local npm packages
COPY package.json* package-lock.json* ./

RUN npm install -g @angular/cli
RUN npm install --save @angular/material @angular/cdk
RUN npm install --save @angular/animations
COPY . .
