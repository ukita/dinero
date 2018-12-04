import { extractFragmentReplacements } from 'prisma-binding'

import Query from './Query'
import Mutation from './Mutation'

export const resolvers: any = {
  ...Query,

  Mutation
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
