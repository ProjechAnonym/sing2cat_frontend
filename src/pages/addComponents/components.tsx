import Sing2cat from "./sing2cat";
export const ComponentsClass = (component: string, dark: boolean) => {
  switch (component) {
    case "sing2cat":
      return <Sing2cat dark={dark} />;

    default:
      break;
  }
};
