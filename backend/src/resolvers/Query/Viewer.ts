import { getUserId, Context } from "../../utils";
import {
  UserNullablePromise,
  WalletWhereInput,
  Wallet
} from "../../generated/prisma-client";

export interface ViewerWalletsArguments {
  id: string;
}

export const Viewer = {
  me: (_parent, _args, ctx: Context): UserNullablePromise => {
    const userId = getUserId(ctx);

    return ctx.prisma.user({ id: userId });
  },

  wallet: async (
    _parent,
    { id }: ViewerWalletsArguments,
    ctx: Context
  ): Promise<Wallet> => {
    const userId = getUserId(ctx);

    let query: WalletWhereInput = { user: { id: userId } };
    if (id) {
      query = { ...query, id };
    }

    const [wallet] = await ctx.prisma.wallets({ where: query, first: 1 });

    return wallet;
  }
};
