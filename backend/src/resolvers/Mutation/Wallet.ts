import { Context, getUserId } from "../../utils";
import {
  WalletCreateInput,
  Wallet as IWallet
} from "../../generated/prisma-client";

export interface AddWalletArguments {
  name: string;
  description: string;
}

export const Wallet = {
  addWallet: async (
    _parent,
    { name, description }: AddWalletArguments,
    ctx: Context
  ): Promise<IWallet> => {
    const id = getUserId(ctx);

    const walletData: WalletCreateInput = {
      name,
      description,
      user: { connect: { id } }
    };

    return ctx.prisma.createWallet(walletData);
  }
};
