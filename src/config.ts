interface ConfigType {
  appSecret: string
  prismaEndpoint: string
  prismaSecret: string
  tokenExpiresAt: number
}

export default {
  appSecret: process.env.APP_SECRET || '',
  prismaEndpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466/',
  prismaSecret: process.env.PRISMA_SECRET || '',
  tokenExpiresAt: process.env.TOKEN_EXPIRES_AT || 7200
} as ConfigType
