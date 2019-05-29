import { Context, getUserId } from "../../utils";

export const Transaction = {
  addTransaction: async (
    _parent: any,
    args: {
      walletId?: any;
      type?: any;
      value?: any;
      description?: any;
      tags?: any;
    },
    ctx: Context
  ) => {
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
