import styled from "styled-components";
export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  transition: 0.2s;
`;
export const RouteContainer = styled.div<{ $foot: number; $head: number }>`
  overflow-y: auto;
  height: calc(100% - ${(props) => props.$head + props.$foot}px);
`;
