import { Context, getUserId } from "../../utils";
import {
  TRANSACTION_TYPE,
  Transaction as ITransaction
} from "../../generated/prisma-client";

export interface AddTransactionArguments {
  walletId: string;
  type: TRANSACTION_TYPE;
  value: number;
  description: string;
  tags: string[];
}

export const Transaction = {
  addTransaction: async (
    _parent,
    args: AddTransactionArguments,
    ctx: Context
  ): Promise<ITransaction> => {
    const userId = getUserId(ctx);
    const { walletId } = args;

    const [wallet] = await ctx.prisma.wallets({
      where: { id: walletId, user: { id: userId } }
    });

    return ctx.prisma.createTransaction({
      type: args.type,
      value: args.value * 100,
      description: args.description,
      tags: { set: args.tags },
      wallet: { connect: { id: wallet.id } }
    });
  }
};
