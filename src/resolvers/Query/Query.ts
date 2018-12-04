import { Context } from '../../utils'

export const Query = {
  viewer: () => ({}),

  checkToken: async (parent: any, args: any, ctx: Context, info: any) => {
    const token = await ctx.db.query.accessToken({ where: { id: args.token } })

    if (!token) {
      throw new Error('Invalid token')
    }

    const date = new Date()
    if (token.expiresAt < date) {
      throw new Error('Token has expired')
    }

    return true
  }
}
