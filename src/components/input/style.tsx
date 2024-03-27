import styled from "styled-components";
export const InputContainer = styled.input<{ $width: string; $colors: any }>`
  font-family: Dingding;
  border: none;
  --accent-color: #63a0cf;
  border-radius: 5px 5px 0px 0px;
  background-color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.container
      : props.$colors.backgroundColor};
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: ${(props) =>
    Object.keys(props.theme).length
      ? props.theme.colors.fontColor
      : props.$colors.fontColor};
  padding: 3px;
  width: ${(props) => props.$width};
  transition: all 0.1s ease-in-out;
  &:focus,
  &:hover {
    border-bottom: 2px solid var(--accent-color);
  }
`;
