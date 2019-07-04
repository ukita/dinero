import * as dayjs from "dayjs";

import { Context } from "../../utils";
import { Wallet as IWallet, Transaction } from "../../generated/prisma-client";

export interface BalanceAggregation {
  date: string;
  value: number;
}

const sumValues = (number, { type, value }: Transaction): number => {
  if (type === "EXPENSE") return number - value;

  return number + value;
};

const sumTransactions = (transactions: Transaction[]): number =>
  Math.abs(transactions.reduce(sumValues, 0));

const sumBalance = (transactions: Transaction[]): number =>
  transactions.reduce(sumValues, 0);

export const Wallet = {
  description: ({ description }: IWallet): string => {
    return description || "";
  },

  transactions: (
    { id }: IWallet,
    _args,
    ctx: Context
  ): Promise<Transaction[]> => {
    return ctx.prisma
      .wallet({ id })
      .transactions({ orderBy: "performedAt_DESC" });
  },

  income: async ({ id }: IWallet, _args, ctx: Context): Promise<number> => {
    const startOfMonth = dayjs()
      .startOf("month")
      .toISOString();
    const endOfMonth = dayjs()
      .endOf("month")
      .toISOString();

    const transactions = await ctx.prisma.transactions({
      where: {
        wallet: { id },
        type: "INCOME",
        AND: [
          {
            performedAt_gte: startOfMonth
          },
          {
            performedAt_lte: endOfMonth
          }
        ]
      }
    });

    return sumTransactions(transactions);
  },

  expense: async ({ id }: IWallet, _args, ctx: Context): Promise<number> => {
    const startOfMonth = dayjs()
      .startOf("month")
      .toISOString();
    const endOfMonth = dayjs()
      .endOf("month")
      .toISOString();

    const transactions = await ctx.prisma.transactions({
      where: {
        wallet: { id },
        type: "EXPENSE",
        AND: [
          {
            performedAt_gte: startOfMonth
          },
          {
            performedAt_lte: endOfMonth
          }
        ]
      }
    });

    return sumTransactions(transactions);
  },

  balance: async ({ id }: IWallet, _args, ctx: Context): Promise<number> => {
    const transactions = await ctx.prisma.transactions({
      where: { wallet: { id } }
    });

    return sumBalance(transactions);
  },

  balanceAggregations: async (
    { id }: IWallet,
    _args,
    ctx: Context
  ): Promise<BalanceAggregation[]> => {
    const transactions = await ctx.prisma.transactions({
      where: { wallet: { id } }
    });

    let total = 0;
    const balanceAggregations = transactions.reduce<{ [key: string]: number }>(
      (aggs, transaction) => {
        const date = dayjs(transaction.performedAt).format("YYYY-MM-DD");
        const sum = sumValues(total, transaction);
        total = sum;
        return { ...aggs, [date]: sum };
      },
      {}
    );

    return Object.keys(balanceAggregations).map(key => {
      const agg = balanceAggregations[key];

      return { date: key, value: agg };
    });
  }
};
