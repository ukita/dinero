import { forwardTo } from 'prisma-binding'

export const Query = {
  viewer: forwardTo('viewer')
}
