import { auth } from './auth'
import { wallet } from './wallet'
import { transaction } from './transaction'

export default {
  ...auth,
  ...wallet,
  ...transaction
}
