import styled from "styled-components";
import { DropList } from "../../components/dropList";
export const StyledDropList = styled(DropList)`
  @media screen and (min-width: 360px) and (max-width: 489px) {
    margin: auto 0.4rem;
  }
  @media screen and (max-width: 490px) {
    margin: auto 0.5rem;
  }
`;
export const Icon = styled.i`
  @media screen and (min-width: 360px) and (max-width: 489px) {
    margin: 0 2px;
    font-size: 1rem;
  }
  @media screen and (min-width: 490px) {
    margin: 0 2px;
    font-size: 1.5rem;
  }
`;
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
  margin: 0 3px;
`;
export const Span = styled.span`
  @media screen and (min-width: 360px) and (max-width: 489px) {
    font-size: 1rem;
    margin: auto 3px;
  }
  @media screen and (min-width: 490px) {
    font-size: 1.5rem;
    margin: auto 0.5rem;
  }

  font-family: Dingding;

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
