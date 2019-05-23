import * as sgMail from '@sendgrid/mail'
import { MailData } from '@sendgrid/helpers/classes/mail'

import config from './config'
import { Context, getApplicationHost } from './utils'

sgMail.setApiKey(config.sendgridAPIKey)

export function sendAccessToken (ctx: Context, { email, token }: { email: string; token: string }) {
  const host = getApplicationHost(ctx)

  // TODO: Create an email template
  const msg: MailData = {
    to: email,
    from: 'no-reply@dinero.com',
    subject: 'Dinero Magic Link',
    html: `<a href="${host}/c/${token}">Click here</a>`
  }

  return sgMail.send(msg)
}
