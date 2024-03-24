import { cloneDeep } from "lodash";
export function getSearchResult(word: string, Groups: Array<any> | undefined) {
  const newGroups = Groups && cloneDeep(Groups);
  return newGroups!.filter((group) => {
    // 首先遍历每个组,filter可以有选择的返回元素
    const groupvalidItem = group.value.filter((item: any) =>
      // 遍历每个组的元素
      item.label.toLowerCase().includes(word.toLowerCase()) ? item : null
    );
    // 将每个组的值换成匹配的搜索结果
    group.value = groupvalidItem;
    return groupvalidItem.length ? group : null;
  });
}
