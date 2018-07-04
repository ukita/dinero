import { extractFragmentReplacements } from 'prisma-binding'

import { Query } from './Query'
import Mutation from './Mutation'
import { AuthPayload } from './AuthPayload'
import { Wallet } from './Wallet'
import { Transaction } from './Transaction'
import { Viewer } from './Viewer'

export const resolvers: any = {
  Query,

  Mutation,

  AuthPayload,
  Wallet,
  Transaction,
  Viewer
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
