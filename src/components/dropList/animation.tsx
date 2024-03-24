import { keyframes } from "styled-components";
export const ExpandAnimation = keyframes`
0%{
    transform: scaleY(0);
    transform-origin:0 0;
    opacity: 0;
}
100%{
    transform: scaleY(1);
    transform-origin:0 0;
    opacity: 1;
}`;
export const CollapseAnimation = keyframes`
0%{
    transform: scaleY(1);
    transform-origin:0 0;
    opacity: 1;
}
100%{
    transform: scaleY(0);
    transform-origin:0 0;
    opacity: 0;
}`;
