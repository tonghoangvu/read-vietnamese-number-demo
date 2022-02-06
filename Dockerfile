# syntax=docker/dockerfile:1
FROM node:17-alpine

# Without spaces
ENV NODE_ENV production
ENV PORT 8081

# Just documenting which ports are used, and nothing else
EXPOSE 8081

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production --silent && mv node_modules ../
COPY . .
CMD node src/index
