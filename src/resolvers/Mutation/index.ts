import { Auth } from './Auth'
import { Wallet } from './Wallet'
import { Transaction } from './Transaction'

export default {
  ...Auth,
  ...Wallet,
  ...Transaction
}
