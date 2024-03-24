import { keyframes } from "styled-components";

export const entryAnimation = (position: string) => {
  let myAnimation;
  switch (position) {
    case "leftTop":
      myAnimation = keyframes`0%{
        right:50%;
        bottom:50%;
        opacity: 0;
      }
      100%{
        right:calc(100% + 5px);
        bottom:calc(100% + 5px);
        opacity: 1;
      }`;
      return myAnimation;
    case "Top":
      myAnimation = keyframes`0%{
        left:50%;
        bottom:50%;
        opacity: 0;
      }
      100%{
        left:50%;
        bottom:calc(100% + 10px);
        opacity: 1;
      }`;
      return myAnimation;
    case "rightTop":
      myAnimation = keyframes`0%{
        left:50%;
        bottom:calc(100% + 5px);
        opacity: 1;
      }
      100%{
        left:100%;
        bottom:calc(100% + 5px);
        opacity: 1;
      }`;
      return myAnimation;
    case "left":
      myAnimation = keyframes`0%{
        right:50%;
        bottom:50%;
        opacity: 0;
      }
      100%{
        right:calc(100% + 8px);
        bottom:50%;
        opacity: 1;
      }`;
      return myAnimation;
    case "right":
      myAnimation = keyframes`0%{
        left: 50%;
        top:50%;
        opacity: 0;
      }
      100%{
        left:calc(100% + 5px);
        top:50%;
        opacity: 1;
      }`;
      return myAnimation;
    case "leftBottom":
      myAnimation = keyframes`0%{
        right:50%;
        top:100%;
        opacity: 0;
      }
      100%{
        right:calc(100% + 5px);
        top:100%;
        opacity: 1;
      }`;
      return myAnimation;
    case "Bottom":
      myAnimation = keyframes`0%{
        left:50%;
        top:50%;
        opacity: 0;
      }
      100%{
        left:50%;
        top:calc(100% + 5px);
        opacity: 1;
      }`;
      return myAnimation;
    case "rightBottom":
      myAnimation = keyframes`0%{
        left: 50%;
        top: 50%;
        opacity: 0;
      }
      100%{
        left: calc(100% + 5px);
        top: 50%;
        opacity: 1;
      }`;
      return myAnimation;
    default:
      break;
  }
};
export const exitAnimation = (position: string) => {
  let myAnimation;
  switch (position) {
    case "leftTop":
      myAnimation = keyframes`0%{
        right:calc(100% + 5px);
        bottom:calc(100% + 5px);
        opacity: 1;
      }
      100%{
        right:50%;
        bottom:50%;
        opacity: 0;
      }`;
      return myAnimation;
    case "Top":
      myAnimation = keyframes`0%{
        left:50%;
        bottom:calc(100% + 10px);
        opacity: 1;
      }
      100%{
        left:50%;
        bottom:50%;
        opacity: 0;
      }`;
      return myAnimation;
    case "rightTop":
      myAnimation = keyframes`0%{
        left:100%;
        bottom:calc(100% + 5px);
        opacity: 1;
      }
      100%{
        left:50%;
        bottom:calc(100% + 5px);
        opacity: 0;
      }`;
      return myAnimation;
    case "left":
      myAnimation = keyframes`0%{
        right:calc(100% + 8px);
        bottom:50%;
        opacity: 1;
      }
      100%{
        right:50%;
        bottom:50%;
        opacity: 0;
      }`;
      return myAnimation;
    case "right":
      myAnimation = keyframes`0%{
        left:calc(100% + 5px);
        top:50%;
        opacity: 1;
      }
      100%{
        left: 50%;
        top:50%;
        opacity: 0;
      }`;
      return myAnimation;
    case "leftBottom":
      myAnimation = keyframes`0%{
        right:calc(100% + 5px);
        top:100%;
        opacity: 1;
      }
      100%{
        right:50%;
        top:100%;
        opacity: 0;
      }`;
      return myAnimation;
    case "Bottom":
      myAnimation = keyframes`0%{
        left:50%;
        top:calc(100% + 5px);
        opacity: 1;
      }
      100%{
        left:50%;
        top:50%;
        opacity: 0;
      }`;
      return myAnimation;
    case "rightBottom":
      myAnimation = keyframes`0%{
        left: calc(100% + 5px);
        top: 50%;
        opacity: 1;
      }
      100%{
        left: 50%;
        top: 50%;
        opacity: 0;
      }`;
      return myAnimation;
    default:
      break;
  }
};
