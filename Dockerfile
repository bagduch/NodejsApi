FROM node:alpine
WORKDIR /app
COPY package.json package.json
RUN npm install

COPY . /app/
EXPOSE 8080
CMD ["npm","start"]