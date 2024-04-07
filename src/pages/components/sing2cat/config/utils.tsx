import { cloneDeep } from "lodash";
export function EditArrayLength(
  array: Array<any> | null,
  opt: boolean,
  kind: string
) {
  switch (kind) {
    case "link":
      if (array!.length === 1 && !opt) {
        return array;
      }
      const linkArray = cloneDeep(array);
      opt ? linkArray!.push("") : linkArray!.pop();
      return linkArray;
    case "sets":
      array && opt
        ? array.push({
            label: "",
            value: { type: "local", path: "", china: true },
          })
        : array?.pop();
      const setsArray =
        !array && opt
          ? [
              {
                label: "",
                value: { type: "local", path: "", china: true },
              },
            ]
          : cloneDeep(array);
      return setsArray ? setsArray : null;
    default:
      break;
  }
}
export function EditValue(
  array: Array<any>,
  kind: string,
  index: number,
  data: string | boolean,
  part: string
) {
  const newArrays = cloneDeep(array);
  switch (kind) {
    case "link":
      newArrays[index] = data;
      return newArrays;
    case "rulesets":
      part === "name"
        ? (newArrays[index].label = data)
        : (newArrays[index].label = newArrays[index].label);

      part === "link"
        ? (newArrays[index].value.path = data)
        : (newArrays[index].value.path = newArrays[index].value.path);
      part === "type"
        ? (newArrays[index].value.type = data)
        : (newArrays[index].value.type = newArrays[index].value.type);
      part === "china"
        ? (newArrays[index].value.china = data)
        : (newArrays[index].value.type = newArrays[index].value.type);
      return newArrays;
    default:
      break;
  }
}
