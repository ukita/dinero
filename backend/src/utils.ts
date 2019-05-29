import * as jwt from "jsonwebtoken";
import { ContextParameters } from "graphql-yoga/dist/types";

import { Prisma } from "./generated/prisma-client";
import config from "./config";

export interface Context extends ContextParameters {
  prisma: Prisma;
}

export function getUserId(ctx: Context): string | null {
  const { token } = ctx.request.cookies;

  if (token) {
    const { userId }: { userId: string } = jwt.verify(token, config.appSecret);

    return userId;
  }

  return null;
}

export function getApplicationHost(ctx: Context): string {
  const proto = ctx.request.headers["x-forwarded-proto"] || "http";
  const host =
    ctx.request.headers["host"] || ctx.request.headers["x-now-deployment-url"];

  return `${proto}://${host}`;
}
