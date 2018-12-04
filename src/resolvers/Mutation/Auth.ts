import * as jwt from 'jsonwebtoken'
import { addFragmentToInfo } from 'graphql-binding'

import { Context } from '../../utils'
import config from '../../config'

export const Auth = {
  signup: async (parent: any, args: any, ctx: Context, info: any) => {
    const user = await ctx.db.mutation.createUser({
      data: args
    })

    const expiresAt = new Date()
    expiresAt.setSeconds(config.tokenExpiresAt)

    const token = await ctx.db.mutation.createAccessToken({
      data: { user: { connect: { id: user.id } }, expiresAt }
    })

    // TODO: Send email with link to activation
    console.log(token)

    return { message: `Check your ${user.email} for a link we just sent you` }
  },

  confirmToken: async (parent: any, args: any, ctx: Context, info: any) => {
    const fragment = `fragment EnsureUser on ConfirmTokenPayload { user { id } }`
    const token = await ctx.db.query.accessToken(
      {
        where: { id: args.token }
      },
      addFragmentToInfo(info, fragment)
    )
    if (!token) {
      throw new Error('Invalid token')
    }

    const date = new Date()
    if (token.expiresAt < date) {
      throw new Error('Expired token')
    }

    return {
      token: jwt.sign({ userId: token.user.id }, config.appSecret),
      user: token.user
    }
  }
}
