# stage 1: builder
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
# لو ما عندكيش build script إحذفي RUN npm run build
# RUN npm run build

# stage 2: production
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app /app

CMD ["node","app.js"]
