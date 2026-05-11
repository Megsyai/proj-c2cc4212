import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Server-only admin client. Bypasses RLS — never import from browser code.
 * Only safe to import inside `*.server.ts` files or `createServerFn` handlers.
 */
const url = process.env.SUPABASE_URL ?? "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const supabaseAdmin = createClient<Database>(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
