import { getUserId, Context } from '../../utils'

export const Viewer = {
  me: (parent, args, ctx: Context, info) => {
    const userId = getUserId(ctx)
    return ctx.db.query.user({ where: { id: userId } }, info)
  },

  wallets: (parent, { id }, ctx: Context, info) => {
    const userId = getUserId(ctx)

    return ctx.db.query.wallets(
      {
        where: { user: { id: userId }, id: id }
      },
      info
    )
  }
}
