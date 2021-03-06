import * as jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

import { Context } from "../../utils";
import config from "../../config";
import { sendAccessToken } from "../../mail";
import { User } from "../../generated/prisma-client";

export interface AuthSignupArguments {
  name: string;
  email: string;
}

export interface AuthSigninArguments {
  email: string;
}

export interface AuthConfirmTokenArguments {
  token: string;
}

export interface AuthMessage {
  message: string;
}

const randomBytesPromiseified = promisify(randomBytes);
const isTokenValid = (expiresAt: number | undefined): boolean => {
  if (!expiresAt) return false;

  return expiresAt >= Date.now();
};

export const Auth = {
  signup: async (
    _parent,
    args: AuthSignupArguments,
    ctx: Context
  ): Promise<AuthMessage> => {
    const token = (await randomBytesPromiseified(20)).toString("hex");
    const tokenExpiry = Date.now() + config.tokenExpiresAt;

    const user = await ctx.prisma.createUser({
      ...args,
      token,
      tokenExpiry
    });

    await sendAccessToken(ctx, { email: user.email, token });

    return { message: `Check your ${user.email} for a link we just sent you` };
  },

  signin: async (
    _parent,
    { email }: AuthSigninArguments,
    ctx: Context
  ): Promise<AuthMessage> => {
    const token = (await randomBytesPromiseified(20)).toString("hex");
    const tokenExpiry = Date.now() + config.tokenExpiresAt;

    await ctx.prisma.updateUser({
      where: { email },
      data: {
        token,
        tokenExpiry
      }
    });

    await sendAccessToken(ctx, { email, token });

    return { message: `Check your ${email} for a link we just sent you` };
  },

  confirmToken: async (
    _parent,
    { token }: AuthConfirmTokenArguments,
    ctx: Context
  ): Promise<User> => {
    const user = await ctx.prisma.user({ token });

    if (!user || isTokenValid(user.tokenExpiry)) {
      throw new Error("This token is either invalid or expired");
    }

    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: {
        token: null,
        tokenExpiry: null
      }
    });

    const jwtToken = jwt.sign({ userId: user.id }, config.appSecret);
    ctx.response.cookie("token", jwtToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return user;
  },

  signout: async (_parent, _args, ctx: Context): Promise<AuthMessage> => {
    ctx.response.clearCookie("token");

    return { message: `Come back soon! We're already missing you.` };
  }
};
