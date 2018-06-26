<h1 align="center"><strong>Dinero</strong></h1>

<br />

<div align="center"><img src="https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif" /></div>

<div align="center"><strong>💰 Simple budgeting app for studies purposes 💰</strong></div>

## Features

- **Scalable GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on PostgreSQL)

## Requirements

- **Docker:** This app uses Docker to run the Prisma service

## Getting started

```sh
# Clone the repository
git clone https://github.com/ukita/dinero-api.git

# Navigate into folder and install dependencies
cd dinero-api
yarn

# Deploy and initialize Prisma service
cd database
docker-compose up -d
cd ..
yarn prisma deploy

# Start the graphql server
yarn dev
```

## License

MIT
