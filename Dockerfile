# -------- BUILD --------
FROM oven/bun:1.3.1-alpine AS builder
WORKDIR /app

COPY bun.lock package.json ./
RUN bun install

COPY . .
RUN bun run build

# -------- RUNTIME --------
FROM oven/bun:1.3.1-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy only what is required to run SSR
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["bun", "/app/build/index.js"]
