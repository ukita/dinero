import { rule, shield, and } from "graphql-shield";
import { getUserId, Context } from "../utils";

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context);

    return context.prisma.$exists.user({
      id: userId
    });
  }),

  canAddTransaction: rule()(async (_parent, { walletId }, context: Context) => {
    const userId = getUserId(context);
    const user = await context.prisma.wallet({ id: walletId }).user();

    return userId === user.id;
  })
};

export const permissions = shield({
  Query: {
    viewer: rules.isAuthenticatedUser
  },
  Mutation: {
    addWallet: rules.isAuthenticatedUser,
    addTransaction: and(rules.isAuthenticatedUser, rules.canAddTransaction)
  }
});
