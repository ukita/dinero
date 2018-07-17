import { Context } from '../utils'
import { Transaction } from '../generated/prisma'

const sumTransactions = (transactions: Transaction[]) =>
  transactions.reduce((sum, { value }) => sum + value, 0)

export const Wallet = {
  income: {
    fragment: `fragment Income on Wallet { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const transactions = await ctx.db.query.transactions({
        where: { wallet: { id }, type: 'INCOME' }
      })

      return sumTransactions(transactions) / 100
    }
  },

  expense: {
    fragment: `fragment Expense on Wallet { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const transactions = await ctx.db.query.transactions({
        where: { wallet: { id }, type: 'EXPENSE' }
      })

      return sumTransactions(transactions) / 100
    }
  }
}
