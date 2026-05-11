import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as indexRoute } from "./routes/index";

const routeTree = rootRoute.addChildren([indexRoute]);

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
