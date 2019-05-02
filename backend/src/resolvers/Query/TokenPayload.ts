import { Context } from '../../utils'

export const TokenPayload = {
  user: async ({ user: { id } }, args, ctx: Context) => {
    return ctx.prisma.user({ id })
  }
}
