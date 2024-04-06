import { useState } from "react";
import { ComponentMsg, MsgCard, MsgSpan } from "../../style";
import { Icon, Container, Controller, MsgContainer, Head } from "./style";
import { ButtonComponent } from "../../../../components/button";
export default function Config(props: { dark: boolean }) {
  const { dark } = props;
  const [links, setLinks] = useState<Array<string>>([""]);
  const [sets, setSets] = useState<
    Array<{
      label: string;
      value: { type: string; path: string; china: boolean };
    }>
  >();
  return (
    <Container>
      <Head>
        <Controller>
          <MsgSpan>机场链接:</MsgSpan>
          <MsgSpan>
            <Icon className="bi bi-dash-square-fill" />
            <Icon className="bi bi-plus-square-fill" />
          </MsgSpan>
        </Controller>
        <Controller>
          <MsgSpan>规则集:</MsgSpan>
          <MsgSpan>
            <Icon className="bi bi-dash-square-fill" />
            <Icon className="bi bi-plus-square-fill" />
          </MsgSpan>
        </Controller>
      </Head>
      <MsgContainer></MsgContainer>
      <MsgContainer></MsgContainer>
    </Container>
  );
}
