import { Context } from "../../utils";
import { Transaction, FragmentableArray } from "../../generated/prisma-client";

export interface WalletParent {
  id: string;
}

const sumTransactions = (transactions: Transaction[]): number =>
  transactions.reduce((sum, { value }): number => sum + value, 0);

export const Wallet = {
  income: async (
    { id }: WalletParent,
    _args,
    ctx: Context
  ): Promise<number> => {
    const fragment = `fragment Income on Wallet { id }`;
    const transactions = await ctx.prisma
      .transactions({
        where: { wallet: { id }, type: "INCOME" }
      })
      .$fragment<FragmentableArray<Transaction>>(fragment);

    return sumTransactions(transactions);
  },

  expense: async (
    { id }: WalletParent,
    _args,
    ctx: Context
  ): Promise<number> => {
    const fragment = `fragment Expense on Wallet { id }`;
    const transactions = await ctx.prisma
      .transactions({
        where: { wallet: { id }, type: "EXPENSE" }
      })
      .$fragment<FragmentableArray<Transaction>>(fragment);

    return sumTransactions(transactions);
  }
};
