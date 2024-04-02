import { AddContent } from "../style";
import Content from "../content";
export default function Sing2cat(props: { dark: boolean }) {
  const { dark } = props;
  return (
    <AddContent>
      <Content dark={true} />
    </AddContent>
  );
}
