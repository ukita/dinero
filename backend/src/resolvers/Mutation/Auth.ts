import * as jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'
import { promisify } from 'util'

import { Context } from '../../utils'
import config from '../../config'
import { sendAccessToken } from '../../mail'

const randomBytesPromiseified = promisify(randomBytes)
const isTokenValid = (expiresAt: number | undefined): boolean => {
  if (!expiresAt) return false

  return expiresAt >= Date.now()
}

export const Auth = {
  signup: async (parent: any, args: any, ctx: Context) => {
    const token = (await randomBytesPromiseified(20)).toString('hex')
    const tokenExpiry = Date.now() + config.tokenExpiresAt

    const user = await ctx.prisma.createUser({
      ...args,
      token,
      tokenExpiry
    })

    sendAccessToken({ email: user.email, token })

    return { message: `Check your ${user.email} for a link we just sent you` }
  },

  signin: async (parent: any, { email }: any, ctx: Context) => {
    const token = (await randomBytesPromiseified(20)).toString('hex')
    const tokenExpiry = Date.now() + config.tokenExpiresAt

    await ctx.prisma.updateUser({
      where: { email },
      data: {
        token,
        tokenExpiry
      }
    })

    sendAccessToken({ email, token })

    return { message: `Check your ${email} for a link we just sent you` }
  },

  confirmToken: async (parent: any, { token }: any, ctx: Context) => {
    const user = await ctx.prisma.user({
      token
    })

    if (!user || isTokenValid(user.tokenExpiry)) {
      throw new Error('This token is either invalid or expired')
    }

    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: {
        token: null,
        tokenExpiry: null
      }
    })

    return {
      token: jwt.sign({ userId: user.id }, config.appSecret),
      user
    }
  }
}
