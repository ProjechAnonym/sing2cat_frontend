import { keyframes } from "styled-components";
export const entryAnimation = keyframes`
0%{
    transform: translate(-50%,50%);
    opacity: 1;
}
100%{  
    transform: translate(-50%,0);
    opacity: 1;
}
`;
export const exitAnimation = keyframes`
0%{
    transform: translate(-50%,50%);opacity: 1;
}
100%{
    transform: translate(-50%,50%);opacity: 0;
}
`;
