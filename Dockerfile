# syntax=docker/dockerfile:1

##### Stage 1: install deps + build the Vite app #####
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

# Install dependencies first for better layer caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the source and build the static bundle
COPY . .
RUN pnpm build

##### Stage 2: install production-only deps for the Express server #####
FROM node:22-alpine AS prod-deps
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

##### Stage 3: minimal runtime image #####
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Run as a non-root user
RUN addgroup -S app && adduser -S app -G app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY server.mjs package.json ./

USER app

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/api/health" || exit 1

CMD ["node", "server.mjs"]
