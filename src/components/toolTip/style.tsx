import styled, { css } from "styled-components";
import { entryAnimation, exitAnimation } from "./animation";
export const ToolTipMsg = styled.div<{ $exit: boolean; $width: string }>`
  position: absolute;
  width: ${(props) => props.$width};
  left: 50%;
  bottom: 110%;
  transform: translateX(-50%);
  font-family: Dingding;
  font-size: 0.8rem;
  padding: 0;
  opacity: ${(props) => (props.$exit ? 0 : 1)};
  ${(props) =>
    props.$exit
      ? css`
          animation: ${exitAnimation} 0.1s;
        `
      : css`
          animation: ${entryAnimation} 0.3s;
        `}
`;
export const ContainerDiv = styled.div<{
  $colors: any;
  $lightColor?: string;
  $visible?: boolean;
}>`
  text-align: center;
  width: fit-content;
  color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.fontColor
      : props.$colors.fontColor};
  padding: 0;
  position: relative;
  ${(props) =>
    props.$visible && `box-shadow: 0 0 3px 3px ${props.$lightColor};`}
  transition:.2s
`;
