import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

/**
 * Layout route that gates all `_authenticated/*` children behind Supabase auth.
 * Calling `supabase.auth.getUser()` here ensures the session is hydrated
 * before child loaders run, so any auth-protected server function gets a
 * valid bearer token.
 */
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/login" });
    }
  },
  component: () => <Outlet />,
});
