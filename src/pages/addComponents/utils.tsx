import { ComponentsClass } from "./components";
export function formatData(config: any, dark: boolean) {
  const components = config.Components.map((component: string) => {
    return { label: component, value: ComponentsClass(component, dark) };
  });
  return [{ label: "组件类型", value: components }];
}
