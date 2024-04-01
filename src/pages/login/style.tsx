import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.form`
  background-color: ${(props) => props.theme.colors.container};
  width: 18rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
`;
export const Span = styled.span`
  width: 100%;
  display: flex;
  font-family: Dingding;
  user-select: none;
  color: ${(props) => props.theme.colors.fontColor};
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: end;
  margin: 1rem 0 0 0;
`;
