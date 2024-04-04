import { GenerateComponents } from "./utils";
import { Container, DefaultContent } from "./style";
export default function Home(props: {
  value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  } | null;
}) {
  const { value } = props;
  return (
    <Container>
      {value !== null ? (
        GenerateComponents(value)
      ) : (
        <DefaultContent>尚未选择组件</DefaultContent>
      )}
    </Container>
  );
}
