FROM node:alpine

WORKDIR /app
RUN npm install -g nodemon
COPY package.json /app/package.json
RUN npm install --quiet
EXPOSE 8080
CMD [ "npm","run","dev" ]