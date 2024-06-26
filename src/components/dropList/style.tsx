import styled, { css } from "styled-components";
import { ExpandAnimation, CollapseAnimation } from "./animation";
export const Container = styled.div`
  position: relative;
  width: fit-content;
`;
export const CollapseIcon = styled.i<{ $visible: boolean; $color: any }>`
  position: absolute;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  transition: 0.2s;
  color: ${(props) => props.$color.fontColor};
  ${(props) =>
    props.$visible
      ? css`
          rotate: 0deg;
        `
      : css`
          rotate: 180deg;
        `}
  &:hover {
    cursor: pointer;
  }
`;
export const ListContainer = styled.div<{
  $visible: boolean;
  $exit: boolean;
  $zIndex: number;
}>`
  z-index: ${(props) => props.$zIndex};
  border-radius: 5px;
  position: absolute;
  top: calc(100% + 3px);
  overflow-y: auto;
  max-height: 6rem;
  display: ${(props) => (props.$visible ? "block" : "none")};
  ${(props) =>
    props.$exit
      ? css`
          opacity: 0;
          animation: ${CollapseAnimation} 0.2s;
        `
      : css`
          opacity: 1;
          animation: ${ExpandAnimation} 0.2s;
        `}
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const GroupCard = styled.div<{
  $width: string;
  $colors: any;
  $height: string;
  $fontSize: string;
}>`
  letter-spacing: 0.2rem;
  color: ${(props) => props.$colors.fontColor};
  font-family: Dingding;
  font-size: ${(props) => props.$fontSize};
  user-select: none;
  text-align: center;
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$colors.groupCard};
  border-radius: 5px;
  overflow-x: auto;
  word-break: break-all;
`;

export const ItemCard = styled.label<{
  $width: string;
  $colors: any;
  $height: string;
  $fontSize: string;
}>`
  position: relative;
  letter-spacing: 0.2rem;
  display: inline-block;
  background-color: ${(props) => props.$colors.ItemCard};
  font-family: Dingding;
  font-size: ${(props) => props.$fontSize};
  word-break: break-all;
  color: ${(props) => props.$colors.fontColor};
  width: ${(props) => props.$width};
  text-align: center;
  border-radius: 5px;
  transition: 0.2s;
  margin: 3px;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: ${(props) => props.$colors.ItemHoverCard};
  }
`;
export const ItemButton = styled.input<{ $colors: any }>`
  display: none;
  &:checked + ${ItemCard} {
    background-color: ${(props) => props.$colors.ItemCheckCard};
  }
`;

export const LabelZone = styled.div<{
  $width: string;
  $colors: any;
  $height: string;
  $fontSize: string;
}>`
  font-family: Dingding;
  font-size: ${(props) => props.$fontSize};
  border: none;
  --accent-color: #63a0cf;
  border-radius: 5px 5px 0px 0px;
  background-color: ${(props) => props.$colors.backgroundColor};
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.fontColor
      : props.$colors.fontColor};
  padding: 3px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  text-align: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--accent-color);
    cursor: pointer;
  }
`;
export const Delete = styled.button<{ $fontSize: string }>`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;
  font-size: ${(props) => props.$fontSize};
  border: none;
  transform: scale(0.9);
  transition: 0.2s;
  background-color: transparent;
  color: ${(props) => props.theme.colors.fontColor};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #808080b3;
    border-radius: 3px;
    padding: 1px;
  }
`;
