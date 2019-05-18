interface ConfigType {
  appSecret: string
  prismaEndpoint: string
  prismaSecret: string
  sendgridAPIKey: string
  frontendURL: string
  tokenExpiresAt: number
}

export default {
  appSecret: process.env.APP_SECRET || '',
  prismaEndpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466/',
  prismaSecret: process.env.PRISMA_SECRET || '',
  sendgridAPIKey: process.env.SENDGRID_API_KEY || '',
  frontendURL: process.env.FRONTEND_HOST || 'http://localhost:4444',
  tokenExpiresAt: process.env.TOKEN_EXPIRES_AT || 7200
} as ConfigType
