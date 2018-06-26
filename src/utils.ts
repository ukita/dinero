import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'
import config from './config'

export interface Context {
  db: Prisma
  request: any
}

export class AuthError extends Error {
  constructor () {
    super('Not authorized')
  }
}

export function getUserId (ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, config.appSecret) as { userId: string }
    return userId
  }

  throw new AuthError()
}
