import styled, { css } from "styled-components";
import {
  EntryAnimation,
  ExitAnimation,
  MaskEntry,
  MaskExit,
} from "./animation";
export const Mask = styled.div<{ $zindex: number; $exit: boolean }>`
  background-color: #00000078;
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  ${(props) =>
    props.$exit
      ? css`
          animation: ${MaskExit} 0.5s;
          opacity: 0;
        `
      : css`
          animation: ${MaskEntry} 0.5s;
          opacity: 1;
        `}
  transform: translate(-50%, -50%);
  transition: 0.3s;
  z-index: ${(props) => props.$zindex};
  backdrop-filter: blur(5px);
`;

export const ModalDiv = styled.div<{
  $zindex: number;
  $colors: any;
  $width: string;
  $height: string;
  $exit: boolean;
}>`
  white-space: pre-wrap;
  padding: 20px;
  position: absolute;
  border-radius: 15px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  background-color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.container
      : props.$colors.background};
  z-index: ${(props) => props.$zindex};
  box-shadow: 0 0 10px 3px
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
  ${(props) =>
    props.$exit
      ? css`
          animation: ${ExitAnimation} 0.2s;
          opacity: 0;
        `
      : css`
          animation: ${EntryAnimation} 0.2s;
          opacity: 1;
        `}
`;
