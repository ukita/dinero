interface ConfigType {
  prod: boolean
  isNow: boolean
  appSecret: string
  prismaEndpoint: string
  prismaSecret: string
  sendgridAPIKey: string
  tokenExpiresAt: number
}

export default {
  prod: Boolean(process.env.NODE_ENV) || false,
  isNow: Boolean(process.env.NOW_REGION) || false,
  appSecret: process.env.APP_SECRET || '',
  prismaEndpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466/graphql',
  prismaSecret: process.env.PRISMA_SECRET || '',
  sendgridAPIKey: process.env.SENDGRID_API_KEY || '',
  tokenExpiresAt: Number(process.env.TOKEN_EXPIRES_AT) || 7200
} as ConfigType
