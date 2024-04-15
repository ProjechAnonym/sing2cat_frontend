import styled, { css } from "styled-components";
export const Container = styled.div<{ $headHeight: number | undefined }>`
  width: 100%;
  overflow-y: auto;
  height: calc(
    100% - ${(props) => (props.$headHeight ? props.$headHeight : 64) + 20}px
  );
`;
export const Group = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.container};
  color: ${(props) => props.theme.colors.fontColor};
  box-shadow: 2px 2px 5px 3px ${(props) => props.theme.shadow.containerColor};
  padding: 10px;
  font-family: Dingding;
  font-weight: 1000;
  font-size: 2rem;
  margin: 15px auto;
`;
export const ProxyCard = styled.div<{
  $dead: boolean;
  $select: boolean;
  $deadColor: string;
  $selectColor: string;
}>`
  width: 7.5rem;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: Dingding;
  background-color: ${(props) =>
    props.$dead ? props.$deadColor : props.theme.colors.card};
  ${(props) =>
    props.$select
      ? css`
          background-color: ${props.$selectColor};
        `
      : css`
          background-color: ${props.$dead
            ? props.$deadColor
            : props.theme.colors.card};
        `}
  border-radius: 10px;
  margin: 5px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const ProxyContainer = styled.div`
  width: 96%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
`;
export const ProxySpan = styled.span<{ $fontSize: string }>`
  font-size: ${(props) => props.$fontSize};
  margin: 2px;
`;
export const Icon = styled.i`
  margin: 0 15px 0 5px;
  display: inline-block;
  transition: 0.2s;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    background-color: #e8e8e847;
    backdrop-filter: blur(2px);
  }
`;
