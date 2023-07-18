# stage1 as builder
FROM node:lts-alpine3.16 as builder

WORKDIR /vue-ui

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Build the project
RUN npm run git

EXPOSE 3000

ENTRYPOINT ["npm", "run", "prod"]

