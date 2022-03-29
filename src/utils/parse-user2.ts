import { GetServerSidePropsContext } from "next";
import { DiscordUser } from "./types";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { config } from "./config";

export function parseStatus(ctx: GetServerSidePropsContext): string | null {
  if (!ctx.req.headers.cookie) {
    return "no cookie";
  }

  const token = parse(ctx.req.headers.cookie)[config.cookieName];

  if (!token) {
    return "no token";
  }

  try {
    const { iat, exp, ...user } = verify(token, config.jwtSecret) as DiscordUser & { iat: number; exp: number };
    return "work!";
  } catch (e) {
    return "error";
  }
}