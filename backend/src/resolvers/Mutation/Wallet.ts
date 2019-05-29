import { Context, getUserId } from "../../utils";
import { WalletCreateInput } from "../../generated/prisma-client";

export const Wallet = {
  addWallet: async (
    _parent: any,
    args: {
      name: string;
      description: string;
    },
    ctx: Context,
    _info: any
  ) => {
    const id = getUserId(ctx);

    const walletData: WalletCreateInput = {
      name: args.name,
      description: args.description,
      user: { connect: { id } }
    };

    return ctx.prisma.createWallet(walletData);
  }
};
