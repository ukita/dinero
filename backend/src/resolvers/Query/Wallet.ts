import { Context } from '../../utils'
import { Transaction, FragmentableArray } from '../../generated/prisma-client'

const sumTransactions = (transactions: Transaction[]) =>
  transactions.reduce((sum, { value }) => sum + value, 0)

export const Wallet = {
  income: async ({ id }, args, ctx: Context) => {
    const fragment = `fragment Income on Wallet { id }`
    const transactions = await ctx.prisma
      .transactions({
        where: { wallet: { id }, type: 'INCOME' }
      })
      .$fragment<FragmentableArray<Transaction>>(fragment)

    return sumTransactions(transactions)
  },

  expense: async ({ id }, args, ctx: Context) => {
    const fragment = `fragment Expense on Wallet { id }`
    const transactions = await ctx.prisma
      .transactions({
        where: { wallet: { id }, type: 'EXPENSE' }
      })
      .$fragment<FragmentableArray<Transaction>>(fragment)

    return sumTransactions(transactions)
  }
}
