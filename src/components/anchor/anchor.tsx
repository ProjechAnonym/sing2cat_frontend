import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import {
  Container,
  ItemContainer,
  Href,
  Line,
  LineTopBottom,
  Svg,
  Span,
} from "./style";
import { lightColor, darkColor } from "./colors";
import { GetHrefEle } from "./utils";
export interface Fixed {
  vertival: "top" | "bottom";
  Vdis: string;
  horizon: "right" | "left";
  Hdis: string;
}
export interface data {
  label: ReactNode;
  onClick?: string | (() => void);
  title: string;
}
interface AnchorProps {
  data: Array<data>;
  fixed?: Fixed | undefined;
  direction?: "column" | "row";
  position?: "bottom" | "right" | "top" | "left";
  dark?: boolean;
  height?: string;
  fontSize?: string;
  width?: string;
}

export const Anchor: FC<AnchorProps> = ({
  data,
  fixed,
  direction = "column",
  position = "bottom",
  dark,
  height = "1.2rem",
  fontSize = "1rem",
  width = "3rem",
}) => {
  const [select, setSelect] = useState(`${data[0].label}-0`);
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);
  const handleScroll = useCallback(() => {
    const eleHeight = GetHrefEle(data);
    eleHeight.forEach(
      (ele) =>
        (ele as { key: string; size: number[] }).size[0] < 10 &&
        (ele as { key: string; size: number[] }).size[1] > 0 &&
        setSelect((ele as { key: string; size: number[] }).key)
    );
  }, [data]);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <Container $fixed={fixed}>
      <Svg
        $height={height}
        $visible={visible}
        viewBox="5 -5 32 32"
        onClick={() => {
          if (!visible) {
            setVisible(true);
            setExit(false);
          }
          !exit && visible && setExit(true);
        }}
      >
        <LineTopBottom
          $lineColor={dark ? darkColor.lineColor : lightColor.lineColor}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></LineTopBottom>
        <Line
          $lineColor={dark ? darkColor.lineColor : lightColor.lineColor}
          d="M7 16 27 16"
        ></Line>
      </Svg>
      <ItemContainer
        $backgroundColor={
          dark ? darkColor.containerColor : lightColor.containerColor
        }
        $visible={visible}
        $direction={direction}
        $position={position}
        $exit={exit}
        onAnimationEnd={() => {
          if (exit) {
            setVisible(false);
            setExit(false);
          }
        }}
      >
        {data.map((part: any, i: number) => {
          return typeof part.onClick === "string" ? (
            <Href
              $selectFontColor={
                dark ? darkColor.selectFontColor : lightColor.selectFontColor
              }
              $width={width}
              $defaultColor={
                dark ? darkColor.defaultColor : lightColor.defaultColor
              }
              $selectedColor={
                dark ? darkColor.selectColor : lightColor.selectColor
              }
              $fontColor={dark ? darkColor.fontColor : lightColor.fontColor}
              $fontSize={fontSize}
              $height={height}
              href={part.onClick}
              key={`${part.title}-${i}`}
              $selected={select === `${part.title}-${i}`}
              onClick={() => setSelect(`${part.title}-${i}`)}
            >
              <Span>{part.label}</Span>
            </Href>
          ) : (
            <Href
              $selectFontColor={
                dark ? darkColor.selectFontColor : lightColor.selectFontColor
              }
              $width={width}
              $defaultColor={
                dark ? darkColor.defaultColor : lightColor.defaultColor
              }
              $selectedColor={
                dark ? darkColor.selectColor : lightColor.selectColor
              }
              $fontColor={dark ? darkColor.fontColor : lightColor.fontColor}
              $fontSize={fontSize}
              $height={height}
              $selected={select === `${part.title}-${i}`}
              key={`${part.title}-${i}`}
              onClick={(e) => {
                e.preventDefault();
                setSelect(`${part.title}-${i}`);
                part.onClick && part.onClick();
              }}
            >
              <Span>{part.label}</Span>
            </Href>
          );
        })}
      </ItemContainer>
    </Container>
  );
};
