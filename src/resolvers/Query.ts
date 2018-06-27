import { getUserId, Context } from '../utils'

export const Query = {

  me: (parent, args, ctx: Context, info) => {
    const userId = getUserId(ctx)
    return ctx.db.query.user({ where: { id: userId } }, info)
  }
}
