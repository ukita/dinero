import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { Context } from '../../utils'
import config from '../../config'
import { WalletCreateWithoutUserInput } from '../../generated/prisma'

const defaultWallet: WalletCreateWithoutUserInput = {
  name: 'Bank Account'
}

export const auth = {

  signup: async (parent: any, args: any, ctx: Context, info: any) => {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password, wallets: { create: defaultWallet } }
    })

    return {
      token: jwt.sign({ userId: user.id }, config.appSecret),
      user
    }
  },

  login: async (parent: any, { email, password }: any, ctx: Context, info: any) => {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, config.appSecret),
      user
    }
  }
}
