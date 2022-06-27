#!/bin/bash
#entrypoint.dev.sh
./.docker/wait-for-it.sh db-postgres:5432
if [ ! -f ".env" ]; then
  cp .env.example .env
fi
npx prisma migrate dev
npm start