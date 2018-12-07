import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { resolvers, fragmentReplacements } from './resolvers'
import config from './config'

const db = new Prisma({
  endpoint: config.prismaEndpoint,
  secret: config.prismaSecret,
  debug: true,
  fragmentReplacements
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, db })
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
