# 베이스 이미지
FROM node:18-alpine AS builder

WORKDIR /app

# 패키지 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 애플리케이션 빌드
COPY . .
RUN yarn build

# 실행 환경 구성
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]
