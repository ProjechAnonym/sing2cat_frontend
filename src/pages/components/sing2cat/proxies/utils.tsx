export function AnchorData(groups: Array<string>) {
  const data = groups.map((group) => {
    return { label: group, onClick: group, title: group };
  });
  console.log(data);
  return data;
}
