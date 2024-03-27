import styled from "styled-components";
export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 1.5rem;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 3px 0;
`;
export const Img = styled.img`
  size: 1.5rem, 1.5rem;
  font-family: Dingding;
  font-size: 1.5rem;
`;
export const Span = styled.span`
  font-size: 1.2rem;
  font-family: Dingding;
  margin: 0 0.5rem;
  padding: 0 3px;
  color: ${(props) => props.theme.colors.fontColor};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #7777773d;
    backdrop-filter: blur(3px);
    border-radius: 5px;
    transform: scale(1.1);
  }
`;
