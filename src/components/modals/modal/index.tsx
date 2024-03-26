import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  CSSProperties,
  FC,
  useCallback,
} from "react";

import { ModalDiv, Mask } from "./style";
import { ModalHead, ModalHeadIcon } from "../headStyle";
import { ModalFoot } from "../footStyle";
import { lightModal, darkModal } from "../modalColor";
import { ButtonComponent } from "../../button";
interface ModalProps {
  maskClose?: boolean;
  width?: string;
  height?: string;
  title?: string;
  dark?: boolean;
  open: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
  head?: ReactNode;
  foot?: ReactNode;
  style?: CSSProperties;
  zIndex?: number;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  maskClose = true,
  open,
  width = "20rem",
  height = "30rem",
  dark = false,
  title = "模态对话框",
  onConfirm,
  onClose,
  head,
  foot,
  style,
  zIndex = 1000,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [exit, setExit] = useState(false);
  const MaskDiv = useRef<HTMLDivElement>(null);
  const handleCloseModal = useCallback(
    (e: MouseEvent) => e.target === MaskDiv.current && setExit(true),
    []
  );
  useEffect(() => {
    setIsOpen(open);
    maskClose && isOpen && document.addEventListener("click", handleCloseModal);
    return () => {
      maskClose && document.removeEventListener("click", handleCloseModal);
    };
  }, [open, isOpen, maskClose, onClose, handleCloseModal]);
  return isOpen ? (
    <Mask $zindex={zIndex} ref={MaskDiv} $exit={exit}>
      <ModalDiv
        $width={width}
        $height={height}
        $zindex={zIndex + 100}
        style={style}
        $colors={dark ? darkModal : lightModal}
        $exit={exit}
        onAnimationEnd={() => {
          if (exit) {
            setExit(false);
            maskClose &&
              document.removeEventListener("click", handleCloseModal);
            onClose && onClose();
          }
        }}
      >
        {head ? (
          head
        ) : (
          <ModalHead>
            <span style={{ width: "90%" }}>{title}</span>
            <ModalHeadIcon className="bi bi-x" onClick={() => setExit(true)} />
          </ModalHead>
        )}
        <div
          style={{
            fontWeight: "normal",
            fontFamily: "FangSong",
            width: "100%",
          }}
        >
          {children}
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
      </ModalDiv>
    </Mask>
  ) : null;
};
