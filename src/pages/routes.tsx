import Login from "./login";
import Reset from "./reset";
import Add from "./addComponents";
export const routes = [
  { path: "/", name: "login", component: <Login /> },
  { path: "/reset", name: "reset", component: <Reset /> },
  { path: "/add", name: "add", component: <Add /> },
];
