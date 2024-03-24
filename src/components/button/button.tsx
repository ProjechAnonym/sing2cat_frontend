import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  CSSProperties,
  FC,
} from "react";
import { lightConfirm, darkConfirm, darkCancel, lightCancel } from "./colors";
import { Button } from "./style";
interface ButtonProps {
  dark?: boolean;
  animate?: boolean;
  onClick?: () => void;
  confirm?: boolean;
  type?: "button" | "reset" | "submit";
  content?: any;
  children?: ReactNode;
  style?: CSSProperties;
  fillUpColor?: string;
  defaultFontColor?: string;
  animationFontColor?: string;
  backgroundColor?: string;
  defaultBorderColor?: string;
}
export const ButtonComponent: FC<ButtonProps> = ({
  dark = false,
  onClick,
  confirm = true,
  type,
  children,
  style,
  fillUpColor,
  defaultFontColor,
  defaultBorderColor,
  animationFontColor,
  backgroundColor,
}) => {
  const button = useRef<HTMLButtonElement>(null);
  const initHeight = button.current?.offsetHeight;
  const colors = dark
    ? { confirm: darkConfirm, cancel: darkCancel }
    : { confirm: lightConfirm, cancel: lightCancel };
  const [animate, setAnimate] = useState(false);
  const [height, setHeight] = useState(initHeight!);
  useEffect(
    () => setHeight(button.current?.offsetHeight!),
    [button.current?.offsetHeight]
  );
  return (
    <Button
      $colors={colors}
      $backgroundcolor={
        backgroundColor ? backgroundColor : colors.confirm.backgroundColor
      }
      $animationfontcolor={
        animationFontColor
          ? animationFontColor
          : colors.confirm.animationFontColor
      }
      $defaultbordercolor={
        defaultBorderColor
          ? defaultBorderColor
          : colors.confirm.defaultBorderColor
      }
      $defaultfontcolor={
        defaultFontColor ? defaultFontColor : colors.confirm.defaultFontColor
      }
      $fillupcolor={fillUpColor ? fillUpColor : colors.confirm.fillUpColor}
      ref={button}
      onAnimationEnd={() => setAnimate(false)}
      $animate={animate}
      onClick={() => {
        setAnimate(true);
        onClick && onClick();
      }}
      $confirm={confirm ? "true" : "false"}
      type={type}
      style={style}
      $height={height}
    >
      {children}
    </Button>
  );
};
