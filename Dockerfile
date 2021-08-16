FROM node:14-alpine AS build

WORKDIR /usr/src/read-vietnamese-number-demo
COPY package.json package-lock.json ./
RUN npm install --production --silent && mv node_modules ../
COPY . .

# Just documenting which ports are used, and nothing else
EXPOSE 8081

# Without spaces
ENV NODE_ENV=production
ENV PORT=8081

CMD node src/index
