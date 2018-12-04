import * as sgMail from '@sendgrid/mail'
import config from './config'

sgMail.setApiKey(config.sendgridAPIKey)

export function sendAccessToken ({
  email,
  token
}: {
  email: string;
  token: string;
}) {
  // TODO: Create an email template
  const msg = {
    to: email,
    from: 'no-reply@dinero.co',
    subject: 'Dinero Access Token',
    html: `<a href="${config.frontendHost}/confirm/${token}">Click here</a>`
  }

  return sgMail.send(msg)
}
