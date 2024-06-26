import styled from "styled-components";
import { spinAfter, spinBefore } from "./animation";
export const Spin = styled.div`
  position: absolute;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
  top: 50%;
  left: 50%;
  translate: calc(-50%) calc(-50%);
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }
  &::before {
    animation: ${spinBefore} 2s infinite;
  }
  &::after {
    animation: ${spinAfter} 2s infinite;
  }
`;
export const Container = styled.div`
  position: relative;
  display: block;
`;
export const LoadMask = styled.div<{
  $zindex: number;
  $window: boolean;
  $backgroundColor: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  position: ${(props) => (props.$window ? "fixed" : "absolute")};
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  z-index: ${(props) => props.$zindex};
  backdrop-filter: blur(5px);
  border-radius: 5px;
`;
