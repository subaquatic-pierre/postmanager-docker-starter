FROM node:16-alpine

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV WDS_SOCKET_PORT=0

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

RUN npm install --legacy-peer-deps

EXPOSE 3000
CMD ["npm", "start"]
