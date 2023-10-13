FROM node:lts-alpine as build-stage
WORKDIR /vue-ui

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run git

FROM nginx:alpine as production-stage
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /vue-ui/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
