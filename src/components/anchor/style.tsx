import styled, { css } from "styled-components";
import { Fixed } from "./anchor";
import { ExitAnimation, EntryAnimation } from "./animation";
function setPosition(position: string) {
  switch (position) {
    case "bottom":
      return css`
        top: 100%;
        right: 0;
      `;
    case "top":
      return css`
        bottom: 100%;
        right: 0;
      `;
    case "right":
      return css`
        left: 100%;
        bottom: 0;
      `;
    case "left":
      return css`
        right: 100%;
        bottom: 0;
      `;
    default:
      break;
  }
}

export const LineTopBottom = styled.path<{ $lineColor: string }>`
  fill: none;
  stroke: ${(props) => props.$lineColor};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke-dasharray: 12 63;
`;
export const Line = styled.path<{ $lineColor: string }>`
  fill: none;
  stroke: ${(props) => props.$lineColor};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const Svg = styled.svg<{ $visible: boolean; $height: string }>`
  padding: 0;
  height: calc(${(props) => props.$height} + 8px);
  /* Define the transition for transforming the SVG */
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.$visible &&
    css`
      transform: rotate(-45deg);
      & > ${LineTopBottom} {
        stroke-dasharray: 20 300;
        stroke-dashoffset: -32.42;
      }
    `}
`;
export const Span = styled.span`
  margin: 0;
  padding-bottom: 0px;
`;
export const Href = styled.a<{
  $selected: boolean;
  $height: string;
  $fontSize: string;
  $fontColor: string;
  $defaultColor: string;
  $selectedColor: string;
  $width: string | undefined;
  $selectFontColor: string;
}>`
  border-radius: 5px;
  width: ${(props) => (props.$width ? props.$width : "fit-content")};
  transition: 0.2s;
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontSize};
  text-decoration: none;
  margin: 2px;
  padding: 3px 2px 0 2px;
  text-align: center;
  font-family: FangSong;
  font-weight: 1000;
  ${(props) =>
    props.$selected
      ? css`
          background-color: ${props.$selectedColor};
          color: ${props.$selectFontColor};
          transform: scale(1.05);
          outline: 1px solid ${props.$selectFontColor};
        `
      : css`
          background-color: ${props.$defaultColor};
          color: ${props.$fontColor};
          transform: scale(0.95);
        `}
  &:hover {
    cursor: pointer;
    transform: scale(1);
    outline: 1px dashed ${(props) => props.$selectFontColor};
  }
`;
export const Container = styled.div<{ $fixed: Fixed | undefined }>`
  ${(props) =>
    props.$fixed &&
    css`
      position: fixed;
      ${props.$fixed.vertival}:${props.$fixed.Vdis};
      ${props.$fixed.horizon}:${props.$fixed.Hdis};
    `}
`;
export const ItemContainer = styled.div<{
  $direction: string;
  $position: string;
  $exit: boolean;
  $visible: boolean;
  $backgroundColor: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  padding: 0;
  border-radius: 5px;
  position: absolute;
  ${(props) =>
    props.$visible
      ? css`
          display: flex;
          flex-direction: ${props.$direction};
        `
      : css`
          display: none;
        `}

  ${(props) => setPosition(props.$position)}
  ${(props) =>
    props.$exit
      ? css`
          opacity: 0;
          animation: ${ExitAnimation(props.$position)} 0.3s;
        `
      : css`
          opacity: 1;
          animation: ${EntryAnimation(props.$position)} 0.3s;
        `}
`;
