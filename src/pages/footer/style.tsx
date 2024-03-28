import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 2.5rem;
`;
export const MsgContainer = styled.div`
  width: 100%;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 5px 0;
`;
export const Msg = styled.p`
  width: fit-content;
  font-family: FangSong;
  margin: 0 auto;
  font-size: 0.8rem;
  font-weight: 1000;
  color: #b0b0b0ff;
`;
export const Icon = styled.i`
  font-size: 1.8rem;
`;
export const Href = styled.a<{
  $defaultFontColor: string;
  $hoverFontColor: string;
  $defaultBackgroundColor: string;
  $hoverBackgroundColor: string;
}>`
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  padding: 3px;
  width: 2rem;
  height: 2rem;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$defaultBackgroundColor};
  color: ${(props) => props.$defaultFontColor};
  &:hover {
    color: ${(props) => props.$hoverFontColor};
    box-shadow: 0 0 5px 2px ${(props) => props.$hoverFontColor};
    background-color: ${(props) => props.$hoverBackgroundColor};
    cursor: pointer;
  }
`;
