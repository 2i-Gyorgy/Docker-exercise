FROM node:current-alpine3.13

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY . /app
RUN npm install
RUN npm install mongodb

RUN npm run seeds

COPY . .

EXPOSE 9000

CMD [ "node", "server.js" ]