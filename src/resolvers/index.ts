import { extractFragmentReplacements } from 'prisma-binding'

import { Query } from './Query'
import Mutation from './Mutation'
import { ConfirmTokenPayload } from './ConfirmTokenPayload'
import { Wallet } from './Wallet'
import { Transaction } from './Transaction'
import { Viewer } from './Viewer'

export const resolvers: any = {
  Query,

  Mutation,

  ConfirmTokenPayload,
  Wallet,
  Transaction,
  Viewer
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
