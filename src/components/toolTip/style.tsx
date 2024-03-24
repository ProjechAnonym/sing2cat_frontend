import styled, { css } from "styled-components";
import { entryAnimation, exitAnimation } from "./animation";
export const ContainerDiv = styled.div<{
  $colors: any;
  $lightColor?: string;
  $visible?: boolean;
}>`
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
export const ToolTipMsg = styled.div<{ $exit: boolean; $width: string }>`
  position: absolute;
  width: ${(props) => props.$width};
  left: 50%;
  bottom: 110%;
  transform: translateX(-50%);
  font-family: FangSong;
  font-size: 0.8rem;
  font-weight: 1000;
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
