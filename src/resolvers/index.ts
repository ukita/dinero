import { extractFragmentReplacements } from 'prisma-binding'

import { Query } from './Query'
import Mutation from './Mutation'
import { AuthPayload } from './AuthPayload'
import { Wallet } from './Wallet'
import { Transaction } from './Transaction'

export const resolvers: any = {
  Query,

  Mutation,

  AuthPayload,
  Wallet,
  Transaction
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
