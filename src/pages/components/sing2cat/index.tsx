import { useAppSelector } from "../../../hooks";
import { Container, MsgImg, ComponentMsg, MsgSpan, MsgCard } from "../style";
import { Icon, StatusIcon, IntervalContainer } from "./style";
import { Input } from "../../../components/input";
import { ButtonComponent } from "../../../components/button";
import { Tooltip } from "../../../components/toolTip";
export default function Sing2catComponent(props: {
  value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  };
}) {
  const { value } = props;
  const dark = useAppSelector((state) => state.style.dark);
  return (
    <Container>
      <ComponentMsg>
        {value.icon !== "" && <MsgImg src={value.icon}></MsgImg>}
        <MsgCard>
          <MsgSpan style={{ fontSize: "1.2rem" }}>{value.genre}</MsgSpan>
          <MsgSpan
            style={{
              fontSize: "1rem",
              position: "relative",
              display: "flex",
            }}
          >
            {value.name}
            <StatusIcon
              className="bi bi-circle-fill"
              style={{
                color: "red",
              }}
            />
            <Icon
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
        </MsgCard>
        <MsgCard>
          <MsgSpan
            style={{
              fontSize: "1rem",
              position: "relative",
              display: "flex",
            }}
          >
            singbox
            <StatusIcon
              className="bi bi-circle-fill"
              style={{
                color: "red",
              }}
            />
            <Icon
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
          <MsgSpan
            style={{
              fontSize: "1rem",
              position: "relative",
              display: "flex",
            }}
          >
            mosdns
            <StatusIcon
              className="bi bi-circle-fill"
              style={{
                color: "red",
              }}
            />
            <Icon
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
        </MsgCard>
        <MsgCard>
          <Tooltip
            descripton="设置更新节点时间间隔,取消则不定时更新节点"
            width="8.5rem"
          >
            <form>
              <IntervalContainer>
                <Input width="0.35rem" dark={dark} />日
                <Input width="0.85rem" dark={dark} />时
                <Input width="0.85rem" dark={dark} />分
              </IntervalContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2px",
                }}
              >
                <ButtonComponent
                  style={{
                    fontSize: "0.8rem",
                    margin: "0 2px",
                    padding: "0 2px",
                  }}
                  dark={dark}
                  type="submit"
                >
                  更新
                </ButtonComponent>
                <ButtonComponent
                  style={{
                    fontSize: "0.8rem",
                    margin: "0 2px",
                    padding: "0 2px",
                  }}
                  dark={dark}
                  confirm={false}
                  type="button"
                >
                  取消
                </ButtonComponent>
              </div>
            </form>
          </Tooltip>
        </MsgCard>
      </ComponentMsg>
    </Container>
  );
}
