import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 25rem;
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 0.5rem;
`;
export const Controller = styled.div`
  width: fit-content;
  display: flex;
`;
export const Icon = styled.i`
  padding: 0;
  font-size: 1rem;
  margin: 0 5px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }
`;
export const MsgContainer = styled.div`
  width: 100%;
  height: 45%;
  border: 2px solid ${(props) => props.theme.border.cardColor};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.card};
  margin: 1rem 0;
  overflow-y: auto;
`;
