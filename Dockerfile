FROM node:14.0.0-stretch

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm install
RUN npm install -g hexo
COPY . .

EXPOSE 4000
CMD [ "hexo", "server" ]