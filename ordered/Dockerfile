FROM node:14

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

WORKDIR /home/node/app
 
RUN ls

COPY . .
 
ENV NODE_ENV=production
 
RUN npm i

RUN npm run build
 
EXPOSE 8080