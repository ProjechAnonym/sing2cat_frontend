import styled from "styled-components";
export const Container = styled.div`
  position: relative;
`;
export const Label = styled.label<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  transition: 0.4s;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  height: 1.2rem;
  padding: 0 3px;
  &::before {
    position: absolute;
    content: "";
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 5px;
    left: 2px;
    bottom: 0.1rem;
    transform: rotate(270deg);
    background-color: rgb(255, 255, 255);
    transition: 0.4s;
  }
`;
export const Input = styled.input<{ $backgroundColor: string }>`
  display: none;
  &:checked + ${Label} {
    background-color: ${(props) => props.$backgroundColor};
  }
  &:checked + ${Label}::before {
    transform: translateX(calc(100% + 3px));
  }
`;
