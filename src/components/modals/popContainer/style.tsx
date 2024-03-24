import styled, { css } from "styled-components";
import { entryAnimation, exitAnimation } from "./animation";
function getPosition(position: string, height: number, width: number) {
  switch (position) {
    case "leftTop":
      return `right:calc(100% + 5px);bottom:calc(100% + 5px);`;
    case "Top":
      return `transform:translate(-50%,0);left:50%;bottom:calc(100% + 10px);`;
    case "rightTop":
      return `left:100%;bottom:calc(100% + 5px);`;
    case "left":
      return `transform:translate(0,50%);right:calc(100% + 8px);bottom:50%;`;
    case "right":
      return `transform:translate(0,-50%);left:calc(100% + 5px);top:50%;`;
    case "leftBottom":
      return `right:calc(100% + 5px);top:100%;`;
    case "Bottom":
      return `transform:translate(-50%,0);left:50%;top:calc(100% + 5px);`;
    case "rightBottom":
      return `left:calc(100% + 5px);top:50%;`;
    default:
      break;
  }
}
export const PopModalDiv = styled.div<{
  $zindex: number;
  $colors: any;
  $width: string;
  $height: string;
  $position: string;
  $exit: boolean;
  $modalHeight: number;
  $modalWidth: number;
}>`
  white-space: pre-wrap;
  padding: 20px;
  position: absolute;
  border-radius: 15px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  ${(props) =>
    getPosition(props.$position, props.$modalHeight, props.$modalWidth)}
  ${(props) =>
    props.$exit
      ? css`
          opacity: 0;
          animation: ${exitAnimation(props.$position)} 0.3s ease-in-out;
        `
      : css`
          opacity: 1;
          animation: ${entryAnimation(props.$position)} 0.3s ease-in-out;
        `}
  margin: 0 auto;
  background-color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.container
      : props.$colors.background};
  z-index: ${(props) => props.$zindex};
  box-shadow: 3px 3px 10px 3px
    ${(props) =>
      Object.keys(props.theme).length
        ? props.theme.shadow.containerColor
        : props.$colors.shadow};
  border: 2px solid
    ${(props) =>
      Object.keys(props.theme).length
        ? props.theme.border.containerColor
        : props.$colors.border};
  color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.fontColor
      : props.$colors.fontColor};
`;
export const ContainerDiv = styled.div<{ $colors: any }>`
  position: relative;
  width: fit-content;
  color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.fontColor
      : props.$colors.fontColor};
`;
