import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Href,
  Icon,
  LinkContainer,
  MsgContainer,
  Msg,
} from "./style";
import { Tooltip } from "../../components/toolTip";
export default function Footer(props: { onHeight: (data: number) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { onHeight } = props;
  useEffect(() => {
    onHeight(container.current!.offsetHeight);
  }, [container.current?.offsetHeight]);
  return (
    <Container ref={container}>
      <LinkContainer>
        <Tooltip descripton="telegram" style={{ margin: "0 5px" }}>
          <Href
            target="_Blank"
            href="https://t.me/+5yh2rgXjWBlmMDk1"
            $hoverBackgroundColor="#eaeaea"
            $hoverFontColor="#46b2ff"
            $defaultFontColor={theme.colors.fontColor}
            $defaultBackgroundColor={theme.colors.container}
          >
            <Icon className="iconfont icon-telegram-original" />
          </Href>
        </Tooltip>
        <Tooltip descripton="github" style={{ margin: "0 5px" }}>
          <Href
            target="_Blank"
            href="https://github.com/ProjechAnonym"
            $hoverBackgroundColor="#eaeaea"
            $hoverFontColor="#000000"
            $defaultFontColor={theme.colors.fontColor}
            $defaultBackgroundColor={theme.colors.container}
          >
            <Icon className="iconfont icon-github" />
          </Href>
        </Tooltip>
        <Tooltip descripton="youtube" style={{ margin: "0 5px" }}>
          <Href
            href="https://www.youtube.com/channel/UCXiiRClqjDLrqzMbq2Kqb4A"
            $hoverBackgroundColor="#eaeaea"
            $hoverFontColor="#ff003c"
            $defaultFontColor={theme.colors.fontColor}
            $defaultBackgroundColor={theme.colors.container}
          >
            <Icon className="iconfont icon-youtube" />
          </Href>
        </Tooltip>
        <Tooltip descripton="bilibili" style={{ margin: "0 5px" }}>
          <Href
            target="_Blank"
            href="https://space.bilibili.com/8337954"
            $hoverBackgroundColor="#eaeaea"
            $hoverFontColor="#f796d3"
            $defaultFontColor={theme.colors.fontColor}
            $defaultBackgroundColor={theme.colors.container}
          >
            <Icon className="iconfont icon-bilibili" />
          </Href>
        </Tooltip>
        <Tooltip descripton="blog" style={{ margin: "0 5px" }}>
          <Href
            target="_Blank"
            href="https://blog.sifulin.top"
            $hoverBackgroundColor="#eaeaea"
            $hoverFontColor="#3c836c"
            $defaultFontColor={theme.colors.fontColor}
            $defaultBackgroundColor={theme.colors.container}
          >
            <Icon className="iconfont icon-boke1" />
          </Href>
        </Tooltip>
      </LinkContainer>
      <MsgContainer>
        <Msg>Designed by 江南千鹤</Msg>
        <Msg>Developed by sifulin</Msg>
      </MsgContainer>
    </Container>
  );
}
