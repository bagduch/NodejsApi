FROM node:alpine
WORKDIR /app
EXPOSE 8080
CMD ["npm","run","dev"]