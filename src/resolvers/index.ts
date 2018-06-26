import { Query } from './Query'
import { auth } from './Mutation/auth'
import { AuthPayload } from './AuthPayload'

export default {
  Query,

  Mutation: {
    ...auth
  },

  AuthPayload
}
