import { CSSProperties, FC, ReactNode, useState } from "react";
import { Container, Label, Input } from "./style";
interface ToggleProps {
  style?: CSSProperties;
  checkIcon?: ReactNode;
  defaultIcon?: ReactNode;
  onClick?: (data: boolean) => void;
  defaultColor?: string;
  checkColor?: string;
  dark?: boolean;
  id?: string;
}
export const Toggle: FC<ToggleProps> = ({
  checkIcon = <i className="bi bi-check2-square" />,
  defaultIcon = <i className="bi bi-x-square" />,
  onClick,
  defaultColor = "#b6b6b6",
  checkColor = "#21cc4c",
  style,
  dark,
  id = "toggleBox",
}) => {
  const [state, setState] = useState(true);
  return (
    <Container style={style}>
      <Input
        $backgroundColor={checkColor}
        id={id}
        type="checkbox"
        onClick={() => {
          setState(!state);
          onClick && onClick(state);
        }}
      ></Input>
      <Label htmlFor={id} $backgroundColor={defaultColor}>
        <span
          style={{ marginRight: "2px", color: dark ? "#f0f8ff" : "#323232" }}
        >
          {checkIcon}
        </span>
        <span
          style={{ marginRight: "2px", color: dark ? "#f0f8ff" : "#323232" }}
        >
          {defaultIcon}
        </span>
      </Label>
    </Container>
  );
};
