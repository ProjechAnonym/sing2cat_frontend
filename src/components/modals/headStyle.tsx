import styled from "styled-components";
export const ModalHead = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: FangSong;
  font-size: 1.2rem;
  font-weight: 1000;
  position: relative;
  user-select: none;
  margin-bottom: 10px;
`;
export const ModalHeadIcon = styled.i`
  position: absolute;
  right: 0;
  font-size: 1.3rem;
  transition: 0.2s;
  padding: 0;
  height: 1.2rem;
  border-radius: 3px;
  &:hover {
    background-color: #3e3e3e3f;
    backdrop-filter: blur(5px);
    cursor: pointer;
    transform: scale(1.2);
  }
`;
