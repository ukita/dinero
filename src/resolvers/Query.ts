import { getUserId, Context } from '../utils'

export const Query = {
  me: (parent, args, ctx: Context, info) => {
    const userId = getUserId(ctx)
    return ctx.db.query.user({ where: { id: userId } }, info)
  },

  wallets: (parent, args, ctx: Context, info) => {
    const userId = getUserId(ctx)
    return ctx.db.query.wallets({
      where: { user: { id: userId } }
    }, info)
  },

  wallet: async (parent, { id }, ctx: Context, info) => {
    const userId = getUserId(ctx)

    const [wallet] = await ctx.db.query.wallets({
      where: { id, user: { id: userId } }
    }, info)

    return wallet
  }
}
