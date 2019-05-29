import { getUserId, Context } from "../../utils";

export const Viewer = {
  me: (_parent: any, _args: any, ctx: Context) => {
    const userId = getUserId(ctx);

    return ctx.prisma.user({ id: userId });
  },

  wallets: (_parent: any, { id }: any, ctx: Context) => {
    const userId = getUserId(ctx);

    return ctx.prisma.wallets({
      where: { user: { id: userId }, id: id }
    });
  }
};
