export default {
  appSecret: process.env.APP_SECRET || '',
  prismaEndpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466/',
  prismaSecret: process.env.PRISMA_SECRET || ''
}
