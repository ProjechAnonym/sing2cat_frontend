import { useAppSelector, useAppDispatch } from "../../hooks";
import { setDark } from "../../slice";
import { Toggle } from "../../components/toggle";
import { Container, Img, Span } from "./style";
export default function Header() {
  const dark = useAppSelector((state) => state.style.dark);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Img src={require("../../assets/pic/Myfavicon.ico")} alt="图标" />
      <span
        style={{
          userSelect: "none",
          fontFamily: "FangSong",
          fontSize: "1.8rem",
          fontWeight: 1000,
          color: "#0037ff",
        }}
      >
        sifulin
      </span>
      <Toggle
        style={{
          position: "absolute",
          right: "5px",
          top: "50%",
          translate: "0 -50%",
        }}
        dark={dark}
        defaultIcon={<i className="iconfont icon-moon-fill" />}
        checkIcon={<i className="iconfont icon-ai250" />}
        checkColor="#ff5500"
        defaultColor="#5c5c5c"
        onClick={() => dispatch(setDark())}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5px",
          translate: "0 -50%",
          display: "flex",
        }}
      >
        <Span>
          <i
            className="iconfont icon-tuichu"
            style={{ fontSize: "1.3rem", margin: "0 3px" }}
          />
          退出
        </Span>
        <Span>
          <i
            className="iconfont icon-bg-add-form"
            style={{ fontSize: "1.3rem", margin: "0 3px" }}
          />
          添加
        </Span>
      </div>
    </Container>
  );
}
