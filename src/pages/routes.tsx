import Login from "./login";
import Reset from "./reset";
export const routes = [
  { path: "/", name: "login", component: <Login /> },
  { path: "/reset", name: "reset", component: <Reset /> },
];
