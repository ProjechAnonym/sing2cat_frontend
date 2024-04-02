import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 30rem;
  border-radius: 10px;
  padding: 3px;
  background-color: ${(props) => props.theme.colors.container};
  box-shadow: 0 0 10px 3px ${(props) => props.theme.shadow.containerColor};
`;
export const Head = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.border.cardColor};
`;
export const AddContent = styled.div`
  height: 85%;
  width: 96%;
  margin: 0.5rem auto;
`;
export const DefaultContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;
export const InputField = styled.div`
  padding: 2px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
`;
export const Span = styled.span`
  font-family: Dingding;
  user-select: none;
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const Icon = styled.i`
  font-size: 1rem;
  margin: 0 2px;
`;
export const Img = styled.img`
  width: 98%;
  height: 85%;
  border: 2px solid ${(props) => props.theme.border.cardColor};
  border-radius: 8px;
  margin: 2px 0;
`;
