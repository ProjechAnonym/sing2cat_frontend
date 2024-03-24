import { keyframes } from "styled-components";
export const EntryAnimation = (position: string) => {
  let myAnimation;
  switch (position) {
    case "bottom":
      myAnimation = keyframes`
      0%{
        opacity: 0;
        right: 0;
        transform-origin: 0 0;
        transform: scaleY(0);
      }
      100%{
        opacity: 1;
        right: 0;  
        transform-origin: 0 0;
        transform: scaleY(1);
      }`;
      return myAnimation;
    case "top":
      myAnimation = keyframes`
        0%{
            opacity: 0;
            right: 0;
            transform-origin: 0 100%;
            transform: scaleY(0);
        }
        100%{
            opacity: 1;
            right: 0;        
            transform-origin: 0 100%;
            transform: scaleY(1);
        }`;
      return myAnimation;
    case "left":
      myAnimation = keyframes`
        0%{
            opacity: 0;
            bottom:0;
            right: 100%;
            transform-origin: 100% 0;
            transform: scaleX(0);
        }
        100%{
            opacity: 1;
            bottom:0;
            right: 100%;
            transform-origin: 100% 0;
            transform: scaleX(1);
        }`;
      return myAnimation;
    case "right":
      myAnimation = keyframes`
        0%{
            opacity: 0;
            left: 100%;
            transform-origin: 0 0;
            transform: scaleX(0);
        }
        100%{
            opacity: 1;
            left: 100%;
            transform-origin: 0 0;
            transform: scaleX(1);
        }`;
      return myAnimation;
    default:
      break;
  }
};
export const ExitAnimation = (position: string) => {
  let myAnimation;
  switch (position) {
    case "bottom":
      myAnimation = keyframes`
        0%{
            opacity: 1;
            right: 0; 
            transform-origin: 0 0;
            transform: scaleY(1);
        }
        100%{
            opacity: 0;
            right: 0;
            transform-origin: 0 0;
            transform: scaleY(0);
        }`;
      return myAnimation;
    case "top":
      myAnimation = keyframes`
          0%{
            opacity: 1;
            right: 0;
            transform-origin: 0 100%;
            transform: scaleY(1);
          }
          100%{
            opacity: 0;
            right: 0;
            transform-origin: 0 100%;
            transform: scaleY(0);
          }`;
      return myAnimation;
    case "left":
      myAnimation = keyframes`
          0%{
            opacity: 1;
            right: 100%;
            bottom:0;
            transform-origin: 100% 0;
            transform: scaleX(1);
          }
          100%{
            opacity: 0;
            right: 100%;
            bottom:0;
            transform-origin: 100% 0;
            transform: scaleX(0);
          }`;
      return myAnimation;
    case "right":
      myAnimation = keyframes`
          0%{
              opacity: 1;
              left: 100%;
              transform-origin: 0 0;
              transform: scaleX(1);
          }
          100%{
              opacity: 0;
              left: 100%;
              transform-origin: 0 0;
              transform: scaleX(0);
          }`;
      return myAnimation;
    default:
      break;
  }
};
