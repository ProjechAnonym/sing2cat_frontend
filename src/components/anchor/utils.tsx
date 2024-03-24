import { data } from "./anchor";
import { cloneDeep } from "lodash";
export function GetHrefEle(datas: Array<data>) {
  const cloneDatas = cloneDeep(datas);
  const rectDatas = cloneDatas.map((data, i) => {
    if (typeof data.onClick === "string") {
      const { top, bottom } = document
        .getElementById((data.onClick as string).substring(1))
        ?.getBoundingClientRect()!;
      return { key: `${data.title}-${i}`, size: [top, bottom] };
    } else {
      return false;
    }
  });
  return rectDatas.filter((data) => data);
}
