import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
export const ComponentMsg = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  margin: 10px 0;
  overflow-x: auto;
`;
export const MsgImg = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  margin: 5px 2px;
  border: 2px solid ${(props) => props.theme.border.cardColor};
  border-radius: 5px;
`;
export const MsgCard = styled.div`
  margin: 5px 5px;
  padding: 0 3px;
  background-color: ${(props) => props.theme.colors.card};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.border.cardColor};
  border-radius: 5px;
  box-shadow: 1px 1px 4px 1px ${(props) => props.theme.shadow.cardColor};
`;

export const MsgSpan = styled.span`
  font-family: Dingding;
  color: ${(props) => props.theme.colors.fontColor};
  user-select: none;
  width: fit-content;
`;
