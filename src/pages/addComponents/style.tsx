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
  width: 18rem;
  height: 25rem;
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
`;
