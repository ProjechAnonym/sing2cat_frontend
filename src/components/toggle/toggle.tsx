import { CSSProperties, FC, ReactNode, useState } from "react";
import { Container, Label, Input } from "./style";
interface ToggleProps {
  style?: CSSProperties;
  checkIcon?: ReactNode;
  wasteIcon?: ReactNode;
  onClick?: (data: boolean) => void;
  defaultColor?: string;
  checkColor?: string;
}
export const Toggle: FC<ToggleProps> = ({
  checkIcon = <i className="bi bi-check2-square" />,
  wasteIcon = <i className="bi bi-x-square" />,
  onClick,
  defaultColor = "#b6b6b6",
  checkColor = "#21cc4c",
  style,
}) => {
  const [state, setState] = useState(true);
  return (
    <Container style={style}>
      <Input
        $backgroundColor={checkColor}
        id="toggleBox"
        type="checkbox"
        onClick={() => {
          setState(!state);
          onClick && onClick(state);
        }}
      ></Input>
      <Label htmlFor="toggleBox" $backgroundColor={defaultColor}>
        <span style={{ marginRight: "2px" }}>{checkIcon}</span>
        <span style={{ marginLeft: "2px" }}>{wasteIcon}</span>
      </Label>
    </Container>
  );
};
