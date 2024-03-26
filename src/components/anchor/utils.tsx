import { data } from ".";
import { cloneDeep } from "lodash";
export function GetHrefEle(
  datas: Array<data>
): Array<{ key: string; size: number[] }> {
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
  return rectDatas.filter((data) => data) as Array<{
    key: string;
    size: number[];
  }>;
}
export async function Scroll2Ele(id: string) {
  document.getElementById(id.substring(1))?.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}
