import { home } from "./pages/home/home";
import { privacy } from "./pages/privacy/privacy";

export const myRoutes = [
  {
    path: "/privacy",
    component: privacy,
  },
  {
    path: "/",
    component: home,
  },
];
