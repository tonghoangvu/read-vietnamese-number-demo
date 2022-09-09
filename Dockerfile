# syntax=docker/dockerfile:1

# Use LTS version
FROM node:16.17.0-alpine
WORKDIR /app
COPY package*.json ./

# Install only production dependencies
# Use `npm ci` instead of `npm install` to install dependencies
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
RUN npm ci --omit=dev && mv node_modules ../
COPY . .
CMD node src/index
