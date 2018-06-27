import { Context } from '../utils'

export const Wallet = {

  amount: {
    fragment: `fragment Amount on Wallet { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const transactions = await ctx.db.query.transactions({
        where: { wallet: { id } }
      })

      const amount = transactions.reduce((sum, { type, value }) => {
        const multiplier = type === 'INCOME' ? 1 : -1

        return sum + (value * multiplier)
      }, 0)

      return amount / 100
    }
  }

}
