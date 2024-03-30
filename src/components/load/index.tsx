import { ReactNode, FC, CSSProperties } from "react";

import { Spin, LoadMask, Container } from "./style";
interface LoadProps {
  open: boolean;
  zIndex?: number;
  children?: ReactNode;
  style?: CSSProperties;
  window?: boolean;
  backgroundColor?: string;
}
export const Load: FC<LoadProps> = ({
  open,
  zIndex = 1000,
  children,
  style,
  window = false,
  backgroundColor = "#ffffff11",
}) => {
  return (
    <Container style={style}>
      {open && (
        <LoadMask
          $zindex={zIndex}
          $window={window}
          $backgroundColor={backgroundColor}
        >
          <Spin />
        </LoadMask>
      )}
      {children}
    </Container>
  );
};
