import { useAppSelector, useAppDispatch } from "../../hooks";
import Media from "react-media";
import { setDark } from "../../slice";
import { Toggle } from "../../components/toggle";
import { Container, Img, Span, StyledDropList, Icon } from "./style";

export default function Header(props: { data: Array<any> }) {
  const dark = useAppSelector((state) => state.style.dark);
  const dispatch = useAppDispatch();
  const { data } = props;
  return (
    <Container>
      <Img src={require("../../assets/pic/Myfavicon2.ico")} alt="图标" />
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
      <Media query="(min-width: 360px) and (max-width: 489px)">
        {(matches) =>
          matches ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                position: "absolute",
                right: "3px",
                alignItems: "center",
              }}
            >
              <StyledDropList
                dark={dark}
                width="3.5rem"
                itemHeight="1rem"
                itemFontSize="0.9rem"
                labelHeight="1.1rem"
                labelFontSize="1rem"
                groupHeight="1.1rem"
                groupFontSize="1rem"
                data={data}
              />
              <Toggle
                style={{ margin: "auto 0.4rem" }}
                dark={dark}
                defaultIcon={<i className="iconfont icon-moon-fill" />}
                checkIcon={<i className="iconfont icon-ai250" />}
                checkColor="#ff5500"
                defaultColor="#5c5c5c"
                onClick={() => dispatch(setDark())}
              />
            </div>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                position: "absolute",
                right: "1rem",
                alignItems: "center",
              }}
            >
              <StyledDropList
                dark={dark}
                width="8rem"
                itemHeight="1rem"
                itemFontSize="0.9rem"
                labelHeight="1.1rem"
                labelFontSize="1rem"
                groupHeight="1.2rem"
                groupFontSize="1.1rem"
                data={data}
              />
              <Toggle
                style={{ margin: "auto 0.5rem" }}
                dark={dark}
                defaultIcon={<i className="iconfont icon-moon-fill" />}
                checkIcon={<i className="iconfont icon-ai250" />}
                checkColor="#ff5500"
                defaultColor="#5c5c5c"
                onClick={() => dispatch(setDark())}
              />
            </div>
          )
        }
      </Media>
      <Media query="(min-width: 360px) and (max-width: 489px)">
        {(matches) =>
          matches ? (
            <div
              style={{
                position: "absolute",
                left: "2px",
                display: "flex",
                height: "100%",
              }}
            >
              <Span>
                <Icon className="iconfont icon-exit_fill" />
                退出
              </Span>
              <Span>
                <Icon className="iconfont icon-Additem" />
                添加
              </Span>
            </div>
          ) : (
            <div
              style={{
                position: "absolute",
                left: "5px",
                display: "flex",
                height: "100%",
              }}
            >
              <Span>
                <Icon className="iconfont icon-exit_fill" />
                退出
              </Span>
              <Span>
                <Icon className="iconfont icon-Additem" />
                添加
              </Span>
            </div>
          )
        }
      </Media>
    </Container>
  );
}
