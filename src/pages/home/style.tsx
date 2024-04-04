import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const DefaultContent = styled.div`
  width: 100%;
  height: 100%;
  font-family: Dingding;
  font-size: 3.5rem;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.fontColor};
  user-select: none;
`;
