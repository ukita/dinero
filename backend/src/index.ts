import { GraphQLServer, Options } from 'graphql-yoga'
import * as cookieParser from 'cookie-parser'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { permissions } from './permissions'
import config from './config'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: request => ({
    ...request,
    prisma
  })
})

const opts: Options = {
  cors: {
    credentials: true,
    origin: [config.frontendURL]
  }
}

server.express.use(cookieParser())

server.start(opts, () => console.log(`Server is running on http://localhost:4000`))
