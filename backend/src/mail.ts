import * as sgMail from "@sendgrid/mail";
import { MailData } from "@sendgrid/helpers/classes/mail";
import { ClientResponse } from "@sendgrid/client/src/response";

import config from "./config";
import { Context, getApplicationHost } from "./utils";

sgMail.setApiKey(config.sendgridAPIKey);

export interface SendAccessTokenParams {
  email: string;
  token: string;
}

export function sendAccessToken(
  ctx: Context,
  { email, token }: SendAccessTokenParams
): Promise<[ClientResponse, {}]> {
  const host = getApplicationHost(ctx);

  // TODO: Create an email template
  const msg: MailData = {
    to: email,
    from: "no-reply@dinero.com",
    subject: "Dinero Magic Link",
    html: `<a href="${host}/c/${token}">Click here</a>`
  };

  return sgMail.send(msg);
}
