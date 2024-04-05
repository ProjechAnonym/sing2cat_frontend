import styled from "styled-components";
export const Icon = styled.i`
  position: absolute;
  right: 12px;
  bottom: -2px;
  background-color: #90909027;
  backdrop-filter: blur(1px);
  border-radius: 3px;
  transition: 0.1s;
  color: ${(props) => props.theme.colors.fontColor};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const StatusIcon = styled.i`
  font-size: 0.5rem;
  transition: 0.1s;
  margin: auto 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const IntervalContainer = styled.div`
  font-size: 0.8rem;
  font-family: Dingding;
  color: ${(props) => props.theme.colors.fontColor};
`;
