import { ComponentsClass } from "./components";
export function formatData(config: any) {
  const components = config.Components.map((component: string, i: number) => {
    return { label: component, value: ComponentsClass[i] };
  });
  return [{ label: "组件类型", value: components }];
}
