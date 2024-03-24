import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  CSSProperties,
  FC,
} from "react";
import { ButtonComponent } from "../../button/button";
import { lightModal, darkModal } from "../modalColor";
import { PopModalDiv, ContainerDiv } from "./style";
import { ModalHead } from "../headStyle";
import { ModalFoot } from "../footStyle";

interface PopModalProps {
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
  onConfirm?: () => void;
  head?: ReactNode;
  foot?: ReactNode;
  style?: CSSProperties;
  zIndex?: number;
  children?: ReactNode;
  description?: ReactNode;
}
export const PopModal: FC<PopModalProps> = ({
  width = "10rem",
  height = "10rem",
  title = "pop确认框",
  dark,
  onConfirm,
  description,
  head,
  foot,
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
    <ContainerDiv $colors={dark ? darkModal : lightModal} style={style}>
      <div
        onClick={() => {
          setVisible(true);
          setExit(false);
        }}
      >
        {children}
      </div>

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
              <span
                style={{
                  width: "90%",
                  fontWeight: "1000",
                  fontFamily: "FangSong",
                }}
              >
                {title}
              </span>
            </ModalHead>
          )}
          <div style={{ fontFamily: "FangSong", fontWeight: "normal" }}>
            {description}
          </div>
          <ModalFoot>
            {foot ? (
              foot
            ) : (
              <div style={{ gap: "20px", display: "flex" }}>
                <ButtonComponent onClick={() => onConfirm && onConfirm()}>
                  确认
                </ButtonComponent>
                <ButtonComponent onClick={() => setExit(true)} confirm={false}>
                  取消
                </ButtonComponent>
              </div>
            )}
          </ModalFoot>
        </PopModalDiv>
      ) : null}
    </ContainerDiv>
  );
};
