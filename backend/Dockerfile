FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --prod

COPY dist ./src
COPY src/schema.graphql ./src
COPY src/generated/prisma.graphql ./src/generated

EXPOSE 4000

CMD [ "node", "src/index.js" ]
