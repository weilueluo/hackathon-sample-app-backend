# syntax=docker/dockerfile:1

# stage 1
FROM node:16.13.2-alpine AS build
ENV NODE_ENV=production
WORKDIR /app

COPY . .
RUN npm i
RUN npm run build
RUN cd dist

# stage 2
FROM node:16.13.2-alpine AS serve
COPY --from=build /app .
CMD node dist/main.js