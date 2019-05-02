import { getUserId, Context } from '../../utils'

export const Viewer = {
  me: (parent, args, ctx: Context) => {
    const userId = getUserId(ctx)

    return ctx.prisma.user({ id: userId })
  },

  wallets: (parent, { id }, ctx: Context) => {
    const userId = getUserId(ctx)

    return ctx.prisma.wallets({
      where: { user: { id: userId }, id: id }
    })
  }
}
