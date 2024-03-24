import { keyframes } from "styled-components";
export const EntryAnimation = () => keyframes`
0%{
    top: -50%;
    left: -50%;
    opacity: 0;
}
100%{
    top: 50%;
    left: 50%;
    opacity: 1;
}
`;
export const ExitAnimation = () => keyframes`
0%{
    top: 50%;
    left: 50%;
    opacity: 1;
}
100%{
    top: -50%;
    left: -50%;
    opacity: 0;
}
`;
export const MaskEntry = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}`;
export const MaskExit = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}`;
