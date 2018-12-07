import * as jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'
import { promisify } from 'util'

import { Context } from '../../utils'
import config from '../../config'
import { sendAccessToken } from '../../mail'

const randomBytesPromiseified = promisify(randomBytes)

export const Auth = {
  signup: async (parent: any, args: any, ctx: Context, info: any) => {
    const token = (await randomBytesPromiseified(20)).toString('hex')
    const tokenExpiry = Date.now() + config.tokenExpiresAt

    const user = await ctx.db.mutation.createUser({
      data: { ...args, token, tokenExpiry }
    })

    sendAccessToken({ email: user.email, token })

    return { message: `Check your ${user.email} for a link we just sent you` }
  },

  confirmToken: async (parent: any, args: any, ctx: Context, info: any) => {
    const [user] = await ctx.db.query.users({
      where: {
        token: args.token,
        tokenExpiry_gte: Date.now() - config.tokenExpiresAt
      }
    })
    if (!user) {
      throw new Error('This token is either invalid or expired')
    }

    await ctx.db.mutation.updateUser({
      where: { id: user.id },
      data: {
        token: undefined,
        tokenExpiry: undefined
      }
    })

    return {
      token: jwt.sign({ userId: user.id }, config.appSecret),
      user
    }
  }
}
