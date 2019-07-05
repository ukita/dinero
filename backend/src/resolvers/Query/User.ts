import { Context } from "../../utils";
import { User as IUser, Wallet } from "../../generated/prisma-client";

export const User = {
  wallets: ({ id }: IUser, _args, ctx: Context): Promise<Wallet[]> => {
    return ctx.prisma.user({ id }).wallets();
  }
};
