import styled from "styled-components";
export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: center;
  position: relative;
`;
export const Img = styled.img`
  size: 1.8rem, 1.8rem;
  font-family: FangSong;
  font-weight: 1000;
  font-size: 1.8rem;
`;
export const Span = styled.span`
  font-size: 1.2rem;
  font-family: FangSong;
  font-weight: 1000;
  margin: 0 0.5rem;
  padding: 0 3px;
  color: ${(props) => props.theme.colors.fontColor};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ffffff3e;
    backdrop-filter: blur(3px);
    border-radius: 5px;
    transform: scale(1.1);
  }
`;
