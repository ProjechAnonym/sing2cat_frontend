import { keyframes } from "styled-components";
export const Animation = (
  confirm: string,
  confirmColor: string,
  cancelColor: string
) => keyframes`
  0% {
    background-color: ${confirm === "true" ? confirmColor : cancelColor};
    -webkit-box-shadow: 0 0 0 0 transparent;
    box-shadow: 0 0 0 0 transparent;
    transform: scale(1);
  }
  25% {transform: scale(0.9);}
  50% {transform: scale(0.8);}
  50% {transform: scale(0.9);}
  100% {
    background-color: ${confirm === "true" ? confirmColor : cancelColor};
    -webkit-box-shadow: 0 0 10px 0 ${
      confirm === "true" ? confirmColor : cancelColor
    };
    box-shadow: 0 0 10px 0 ${confirm === "true" ? confirmColor : cancelColor};
    ;
  }`;
