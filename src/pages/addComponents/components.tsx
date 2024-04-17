import Sing2cat from "./sing2cat";
export const ComponentsClass = (
  component: string,
  dark: boolean,
  api: string,
  callBack: (status: boolean) => void,
  token: string
) => {
  switch (component) {
    case "sing2cat":
      return (
        <Sing2cat
          api={api}
          onAdd={(status) => callBack(status)}
          token={token}
        />
      );

    default:
      break;
  }
};
