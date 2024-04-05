import Login from "./login";
import Reset from "./reset";
import Add from "./addComponents";
export const routes = [
  { path: "/", name: "login" },
  { path: "/reset", name: "reset" },
  { path: "/add", name: "add" },
  { path: "/home", name: "home" },
];
export function switchComponent(
  component: string,
  onAdd: (status: boolean) => void
) {
  switch (component) {
    case "login":
      return <Login />;
    case "reset":
      return <Reset />;
    case "add":
      return <Add onAdd={(status) => onAdd(status)} />;
    default:
      break;
  }
}
