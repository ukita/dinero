import { getUserId, Context } from "../../utils";
import {
  UserNullablePromise,
  Wallet,
  FragmentableArray
} from "../../generated/prisma-client";

export interface ViewerWalletsArguments {
  id: string;
}

export const Viewer = {
  me: (_parent, _args, ctx: Context): UserNullablePromise => {
    const userId = getUserId(ctx);

    return ctx.prisma.user({ id: userId });
  },

  wallets: (
    _parent,
    { id }: ViewerWalletsArguments,
    ctx: Context
  ): FragmentableArray<Wallet> => {
    const userId = getUserId(ctx);

    return ctx.prisma.wallets({
      where: { user: { id: userId }, id: id }
    });
  }
};
