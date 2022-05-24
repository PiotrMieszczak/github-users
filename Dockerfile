FROM node:16-alpine as builder
WORKDIR /app

COPY package*.json ./

RUN npm i @angular/cli
RUN npm ci

COPY . .
RUN ./node_modules/.bin/ng build --prod

FROM nginx:latest

COPY --from=builder /app/dist/github-users /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/gzip.conf /etc/nginx/gzip.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
