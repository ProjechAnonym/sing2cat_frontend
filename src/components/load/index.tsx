import { ReactNode, FC, CSSProperties } from "react";

import { Spin, LoadMask, Container } from "./style";
interface LoadProps {
  open: boolean;
  zIndex?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
export const Load: FC<LoadProps> = ({
  open,
  zIndex = 1000,
  children,
  style,
}) => {
  return (
    <Container style={style}>
      {open && (
        <LoadMask zindex={zIndex}>
          <Spin />
        </LoadMask>
      )}
      {children}
    </Container>
  );
};
