#!/bin/bash
#entrypoint.dev.sh
./.docker/wait-for-it.sh db-mysql:3306
if [ ! -f ".env" ]; then
  cp .env.example .env
fi
npx prisma migrate dev
npm start