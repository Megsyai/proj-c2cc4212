import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Validates the bearer token from the incoming request and creates a
 * Supabase client scoped to that user (RLS respected).
 *
 * Usage:
 *   const fn = createServerFn().middleware([requireSupabaseAuth]).handler(...)
 */
export const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const auth = getRequestHeader("authorization") ?? "";
    const token = auth.replace(/^Bearer\s+/i, "");
    if (!token) throw new Error("Unauthorized");

    const url = process.env.SUPABASE_URL ?? "";
    const publishableKey =
      process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";

    const supabase = createClient<Database>(url, publishableKey, {
      global: { headers: { Authorization: `Bearer ${token}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) throw new Error("Unauthorized");

    return next({
      context: {
        supabase,
        userId: data.user.id,
        claims: data.user,
      },
    });
  },
);
