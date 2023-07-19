FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run git

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY .nginx/nginx.conf /etc/nginx/nginx.conf