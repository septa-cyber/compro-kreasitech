FROM oven/bun:1.2.15-alpine AS base

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json bun.lock* ./
RUN bun install

FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3005
CMD ["bun", "run", "dev", "--", "-p", "3005"]

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_SUPABASE_URL=https://example.supabase.co
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY=example-anon-key
ARG SUPABASE_SERVICE_ROLE_KEY=example-service-role-key
RUN NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL} \
	NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY} \
	SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY} \
	./node_modules/.bin/next build

FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3005
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3005
CMD ["node", "server.js"]