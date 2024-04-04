import { ComponentsClass } from "./components";
export function formatData(
  config: any,
  dark: boolean,
  callBack: (status: boolean) => void,
  token: string
) {
  const components = config.Components.map((component: string) => {
    return {
      label: component,
      value: ComponentsClass(component, dark, config.API, callBack, token),
    };
  });
  return [{ label: "组件类型", value: components }];
}
export function displayPic(
  file: File,
  callback: (result: string | ArrayBuffer | null) => void
) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => callback && callback(e.target!.result);
}
