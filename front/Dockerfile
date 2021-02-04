FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g npm@7.5.2
RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "start"]