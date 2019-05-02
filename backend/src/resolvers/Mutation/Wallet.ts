import { Context, getUserId } from '../../utils'
import { WalletCreateInput } from '../../generated/prisma-client'

export const Wallet = {
  addWallet: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)

    const walletData: WalletCreateInput = {
      name: args.name,
      description: args.description,
      user: { connect: { id } }
    }

    return ctx.prisma.createWallet(walletData)
  }
}
