import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/our-journey")({
  beforeLoad: () => {
    throw redirect({ to: "/about", statusCode: 301 });
  },
});
