import { useAppSelector, useAppDispatch } from "../../hooks";
import { setDark } from "../../slice";
import { Toggle } from "../../components/toggle";
import { DropList } from "../../components/dropList";
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
          fontFamily: "Dingding",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          color: "#0080ff",
          margin: "0 3px",
        }}
      >
        sifulin
      </span>
      <div
        style={{
          height: "1.5rem",
          display: "flex",
          position: "absolute",
          right: "5px",
          alignItems: "center",
        }}
      >
        <DropList
          style={{ margin: "0 0.5rem" }}
          dark={dark}
          width="8rem"
          itemHeight="1rem"
          itemFontSize="0.9rem"
          labelHeight="1.1rem"
          labelFontSize="1rem"
          groupHeight="1.2rem"
          groupFontSize="1.1rem"
          data={[{ label: "a", value: [{ label: "b", value: { key: "c" } }] }]}
        ></DropList>
        <Toggle
          style={{ margin: "0 0.5rem" }}
          dark={dark}
          defaultIcon={<i className="iconfont icon-moon-fill" />}
          checkIcon={<i className="iconfont icon-ai250" />}
          checkColor="#ff5500"
          defaultColor="#5c5c5c"
          onClick={() => dispatch(setDark())}
        />
      </div>
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
            style={{ fontSize: "1.2rem", margin: "0 3px" }}
          />
          退出
        </Span>
        <Span>
          <i
            className="iconfont icon-bg-add-form"
            style={{ fontSize: "1.2rem", margin: "0 3px" }}
          />
          添加
        </Span>
      </div>
    </Container>
  );
}
