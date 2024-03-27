import styled, { css } from "styled-components";
import { Animation } from "./animation";

export const Button = styled.button<{
  $colors: any;
  $animate: boolean;
  $confirm: string;
  $height: number;
  $backgroundcolor: string;
  $fillupcolor: string;
  $defaultfontcolor: string;
  $animationfontcolor: string;
  $defaultbordercolor: string;
}>`
  ${(props) =>
    props.$animate &&
    css`
      animation: ${Animation(
          props.$confirm,
          props.$fillupcolor,
          props.$colors.cancel.fillUpColor
        )}
        0.2s ease-in-out;
    `}
  width:fit-content;
  font-family: Dingding;
  border-radius: 5px;
  position: relative;
  padding: 2.5px 10px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${(props) =>
    props.$confirm === "true"
      ? props.$defaultfontcolor
      : props.$colors.cancel.defaultFontColor};
  background: ${(props) =>
    props.$confirm === "true"
      ? props.$backgroundcolor
      : props.$colors.cancel.backgroundColor};
  /* 填充时间 */
  transition: ease-in-out 0.3s;
  border: 2px solid
    ${(props) =>
      props.$confirm === "true"
        ? props.$defaultbordercolor
        : props.$colors.cancel.defaultBorderColor};

  &:hover {
    border: 2px solid
      ${(props) =>
        props.$confirm === "true"
          ? props.$fillupcolor
          : props.$colors.cancel.fillUpColor};
    cursor: pointer;

    color: ${(props) =>
      props.$confirm === "true"
        ? props.$animationfontcolor || "inherit"
        : props.$colors.cancel.animationFontColor};
    box-shadow: inset 0 -${(props) => props.$height}px 0 0 ${(props) => (props.$confirm === "true" ? props.$fillupcolor : props.$colors.cancel.fillUpColor)};
  }
`;
