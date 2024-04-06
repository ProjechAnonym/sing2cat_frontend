import { CSSProperties, FC, RefObject } from "react";
import { InputContainer } from "./style";
import { lightColor, darkColor } from "./colors";
interface inputProps {
  disabled?: boolean;
  value?: string;
  dark?: boolean;
  width?: string;
  style?: CSSProperties;
  onChange?: (data: string) => void;
  pattern?: string;
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  Ref?: RefObject<HTMLInputElement>;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
}
export const Input: FC<inputProps> = ({
  dark = false,
  width = "10rem",
  style,
  onChange,
  pattern,
  type = "text",
  value,
  disabled = false,
  Ref,
  maxLength,
  minLength,
  required = false,
  placeholder = "",
  min = 0,
  max = 60,
}) => {
  return (
    <InputContainer
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      ref={Ref}
      disabled={disabled}
      value={value}
      type={type}
      pattern={pattern}
      onChange={(e) => onChange && onChange(e.target.value)}
      $width={width}
      $colors={dark ? darkColor : lightColor}
      style={style}
      min={min}
      max={max}
    ></InputContainer>
  );
};
