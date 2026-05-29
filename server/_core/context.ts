import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { Request, Response } from "express";

export type Context = {
  user: {
    id: number;
    email?: string;
    name?: string;
    role: "patient" | "professional" | "admin" | "secretary";
  } | null;
  req: Request;
  res: Response;
};

export async function createContext(opts: FetchCreateContextFnOptions): Promise<Context> {
  // Get user from session cookie or auth header
  const user = null; // This would be populated from auth middleware

  return {
    user,
    req: opts.req as any,
    res: opts.resHeaders as any,
  };
}
