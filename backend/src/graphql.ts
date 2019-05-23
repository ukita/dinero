import { join } from 'path'
import { readFileSync } from 'fs'
import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import * as cookieParser from 'cookie-parser'

import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { permissions } from './permissions'

readFileSync(join(__dirname, 'prisma.graphql'))

const server = new GraphQLServer({
  typeDefs: importSchema(join(__dirname, 'schema.graphql')),
  resolvers,
  middlewares: [permissions],
  context: request => ({
    ...request,
    prisma
  })
})

server.express.use(cookieParser())

export default server
