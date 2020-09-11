FROM node:latest

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]