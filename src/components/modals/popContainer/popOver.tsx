import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
  FC,
} from "react";
import { lightModal, darkModal } from "../modalColor";
import { PopModalDiv, ContainerDiv } from "./style";
import { ModalHead } from "../headStyle";
interface PopOverProps {
  position?:
    | "leftTop"
    | "Top"
    | "rightTop"
    | "left"
    | "right"
    | "leftBottom"
    | "Bottom"
    | "rightBottom";
  width?: string;
  height?: string;
  title?: string;
  dark?: boolean;
  head?: ReactNode;
  style?: CSSProperties;
  zIndex?: number;
  children?: ReactNode;
  description?: ReactNode;
}
export const PopOver: FC<PopOverProps> = ({
  width = "fit-content",
  height = "fit-content",
  title = "pop确认框",
  dark,
  description,
  head,
  style,
  zIndex = 1000,
  children,
  position = "bottom",
}) => {
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);
  const Modal = useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = useState(0);
  const [modalWidth, setModalWidth] = useState(0);
  useEffect(() => {
    setModalHeight(Modal.current?.offsetHeight!);
    setModalWidth(Modal.current?.offsetWidth!);
  }, [Modal.current?.offsetHeight, Modal.current?.offsetWidth]);
  return (
    <ContainerDiv
      style={style}
      $colors={dark ? darkModal : lightModal}
      onMouseEnter={() => {
        setVisible(true);
        setExit(false);
      }}
      onMouseLeave={() => setExit(true)}
    >
      {children}
      {visible ? (
        <PopModalDiv
          ref={Modal}
          onAnimationEnd={() => {
            exit && setVisible(false);
            setExit(false);
          }}
          $modalHeight={modalHeight!}
          $modalWidth={modalWidth!}
          $position={position}
          $height={height}
          $width={width}
          $zindex={zIndex}
          $colors={dark ? darkModal : lightModal}
          $exit={exit}
        >
          {head ? (
            head
          ) : (
            <ModalHead>
              <span style={{ whiteSpace: "normal" }}>{title}</span>
            </ModalHead>
          )}
          <div style={{ fontFamily: "Dingding" }}>{description}</div>
        </PopModalDiv>
      ) : null}
    </ContainerDiv>
  );
};
