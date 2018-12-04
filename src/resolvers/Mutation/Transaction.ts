import { Context, getUserId } from '../../utils'

export const Transaction = {
  addTransaction: async (parent, args, ctx: Context, info) => {
    const userId = getUserId(ctx)
    const { walletId } = args

    const [wallet] = await ctx.db.query.wallets({
      where: { id: walletId, user: { id: userId } }
    })

    return ctx.db.mutation.createTransaction(
      {
        data: {
          type: args.type,
          value: args.value * 100,
          description: args.description,
          performedAt: args.performedAt,
          tags: { set: args.tags },
          wallet: { connect: { id: wallet.id } }
        }
      },
      info
    )
  }
}
