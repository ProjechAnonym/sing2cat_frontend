import { ReactNode, FC } from "react";

import { Spin, LoadMask } from "./style";
interface LoadProps {
  dark?: boolean;
  open: boolean;
  zIndex?: number;
  children?: ReactNode;
}
export const Load: FC<LoadProps> = ({ open, zIndex = 1000, children }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <LoadMask zindex={zIndex}>
          <Spin />
        </LoadMask>
      )}
      {children}
    </div>
  );
};
