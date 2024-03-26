import { CSSProperties, FC, ReactNode, useState } from "react";
import { lightColor, darkColor } from "./colors";
import { ContainerDiv, ToolTipMsg } from "./style";
interface TooltipProps {
  children?: ReactNode;
  dark?: boolean;
  descripton?: string;
  shadowColor?: string;
  style?: CSSProperties;
  width?: string;
}
export const Tooltip: FC<TooltipProps> = ({
  children,
  dark,
  descripton,
  shadowColor,
  style,
  width = "5rem",
}) => {
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);
  return (
    <ContainerDiv
      style={style}
      $visible={visible}
      $lightColor={shadowColor}
      $colors={dark ? darkColor : lightColor}
      onMouseEnter={() => {
        setExit(false);
        setVisible(true);
      }}
      onMouseLeave={() => {
        setExit(true);
      }}
    >
      {children}
      {visible && (
        <ToolTipMsg
          $exit={exit}
          $width={width}
          onAnimationEnd={() => {
            exit && setVisible(false);
            setExit(false);
          }}
        >
          {descripton}
        </ToolTipMsg>
      )}
    </ContainerDiv>
  );
};
