import { IResolvers } from "graphql-tools";

import * as Query from "./Query";
import * as Mutation from "./Mutation";

export const resolvers: IResolvers = {
  ...Query,

  Mutation: {
    ...Mutation.Auth,
    ...Mutation.Transaction,
    ...Mutation.Wallet
  }
};
