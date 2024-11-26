FROM node:20-alpine AS dependency-base

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

FROM dependency-base AS production-base

RUN npm install

COPY . .

RUN npm run build \
    && npm prune --production

FROM production-base AS builder

COPY --from=production-base /app/dist ./dist

EXPOSE 3000
