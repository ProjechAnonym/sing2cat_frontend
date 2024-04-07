import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../../hooks";
import { CheckStatus, RestartApp } from "../utils";
import { WeekDay, IntervalTip, EditInterval } from "./utils";
import { Container, MsgImg, ComponentMsg, MsgSpan, MsgCard } from "../style";
import { Icon, StatusIcon, IntervalContainer } from "./style";
import { Input } from "../../../components/input";
import { ButtonComponent } from "../../../components/button";
import Config from "./config";
import { Modal } from "../../../components/modals/modal";
import { Notification } from "@douyinfe/semi-ui";
export default function Sing2catComponent(props: {
  value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  };
  api: string | undefined;
  token: string;
}) {
  const { value, api, token } = props;
  const [intervalModal, setIntervalModal] = useState(false);
  const [configModal, setConfigModal] = useState(false);
  const [singbox, setSingbox] = useState(true);
  const [mosdns, setMosdns] = useState(true);
  const [check, setCheck] = useState(true);
  const [restart, setRestart] = useState(false);
  const [week, setWeek] = useState<string | null>(null);
  const [hour, setHour] = useState<string | null>(null);
  const [minute, setMinute] = useState<string | null>(null);
  const [interval, setInterval] = useState<{
    content: string;
    week: string | null;
    hour: string | null;
    minute: string | null;
  }>(IntervalTip(week, hour, minute));
  const [links, setLinks] = useState<Array<string>>([""]);
  const [sets, setSets] = useState<Array<{
    label: string;
    value: { type: string; path: string; china: boolean };
  }> | null>(null);
  const weekDay = useRef<HTMLInputElement>(null);
  const configButton = useRef<HTMLButtonElement>(null);
  const dark = useAppSelector((state) => state.style.dark);
  useEffect(() => {
    if (api && check) {
      CheckStatus("sing-box.service", api, token)
        .then((data) => {
          setSingbox(data);
        })
        .catch((error) => {
          error
            ? Notification.error({
                title: "通知",
                content: "网络错误",
                duration: 2,
                theme: "light",
              })
            : setSingbox(error);
        });
      CheckStatus("mosdns.service", api, token)
        .then((data) => setMosdns(data))
        .catch((error) =>
          error
            ? Notification.error({
                title: "通知",
                content: "网络错误",
                duration: 2,
                theme: "light",
              })
            : setMosdns(error)
        );
      setCheck(false);
    }
    if (api && restart) {
      RestartApp("sing-box.service", api, token)
        .then((data) => {
          setSingbox(data);
        })
        .catch((error) => {
          error
            ? Notification.error({
                title: "通知",
                content: "网络错误",
                duration: 2,
                theme: "light",
              })
            : setSingbox(error);
        });
      RestartApp("mosdns.service", api, token)
        .then((data) => setMosdns(data))
        .catch((error) =>
          error
            ? Notification.error({
                title: "通知",
                content: "网络错误",
                duration: 2,
                theme: "light",
              })
            : setMosdns(error)
        );
      setRestart(false);
    }
    weekDay.current && (weekDay.current.value = WeekDay(week as string));
    setInterval(IntervalTip(week, hour, minute));
  }, [check, restart, week, hour, minute]);
  return (
    <Container>
      <Modal
        title="重置配置文件"
        open={configModal}
        onClose={() => setConfigModal(false)}
        onConfirm={() => configButton.current?.click()}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(links);
            console.log(sets);
          }}
        >
          <Config
            dark={dark}
            onChangeLinks={(links) => setLinks(links)}
            onChangeSets={(sets) => setSets(sets)}
          />
          <button
            style={{ display: "none" }}
            ref={configButton}
            type="submit"
          />
        </form>
      </Modal>
      <Modal
        open={intervalModal}
        width="18rem"
        onClose={() => setIntervalModal(false)}
        onConfirm={() =>
          EditInterval(week, hour, minute, api!, token)
            .then((data) =>
              data
                ? Notification.success({
                    theme: "light",
                    content: "更新成功",
                    title: "通知",
                    duration: 3,
                  })
                : Notification.error({
                    theme: "light",
                    content: "未知错误",
                    title: "通知",
                    duration: 3,
                  })
            )
            .catch((error) =>
              Notification.error({
                theme: "light",
                content: error,
                title: "通知",
                duration: 3,
              })
            )
        }
        title="修改定时任务?"
      >
        {interval.content}
      </Modal>
      <ComponentMsg>
        {value.icon !== "" && <MsgImg src={value.icon}></MsgImg>}
        <MsgCard>
          <MsgSpan style={{ fontSize: "1rem" }}>{value.genre}</MsgSpan>
          <MsgSpan
            style={{
              fontSize: "0.8rem",
              position: "relative",
              display: "flex",
            }}
          >
            {value.name}
            <StatusIcon
              onClick={() => setCheck(true)}
              className="bi bi-circle-fill"
              style={{
                color: singbox && mosdns ? "#1aff00" : "#ff0040",
              }}
            />
            <Icon
              onClick={() => setRestart(true)}
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
        </MsgCard>
        <MsgCard>
          <MsgSpan
            style={{
              fontSize: "0.8rem",
              position: "relative",
              display: "flex",
            }}
          >
            singbox
            <StatusIcon
              onClick={() =>
                api &&
                CheckStatus("sing-box.service", api, token)
                  .then((data) => {
                    setSingbox(data);
                  })
                  .catch((error) => {
                    error
                      ? Notification.error({
                          title: "通知",
                          content: "网络错误",
                          duration: 2,
                          theme: "light",
                        })
                      : setSingbox(error);
                  })
              }
              className="bi bi-circle-fill"
              style={{
                color: singbox ? "#1aff00" : "#ff0040",
              }}
            />
            <Icon
              onClick={() =>
                api &&
                RestartApp("sing-box.service", api, token)
                  .then((data) => {
                    setSingbox(data);
                  })
                  .catch((error) => {
                    error
                      ? Notification.error({
                          title: "通知",
                          content: "网络错误",
                          duration: 2,
                          theme: "light",
                        })
                      : setSingbox(error);
                  })
              }
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
          <MsgSpan
            style={{
              fontSize: "0.8rem",
              position: "relative",
              display: "flex",
            }}
          >
            mosdns
            <StatusIcon
              onClick={() =>
                api &&
                CheckStatus("mosdns.service", api, token)
                  .then((data) => {
                    setMosdns(data);
                  })
                  .catch((error) => {
                    error
                      ? Notification.error({
                          title: "通知",
                          content: "网络错误",
                          duration: 2,
                          theme: "light",
                        })
                      : setMosdns(error);
                  })
              }
              className="bi bi-circle-fill"
              style={{
                color: mosdns ? "#1aff00" : "#ff0040",
              }}
            />
            <Icon
              onClick={() =>
                api &&
                RestartApp("mosdns.service", api, token)
                  .then((data) => {
                    setMosdns(data);
                  })
                  .catch((error) => {
                    error
                      ? Notification.error({
                          title: "通知",
                          content: "网络错误",
                          duration: 2,
                          theme: "light",
                        })
                      : setMosdns(error);
                  })
              }
              className="bi bi-arrow-repeat"
              style={{ fontSize: "0.7rem" }}
            />
          </MsgSpan>
        </MsgCard>
        <MsgCard>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIntervalModal(true);
            }}
          >
            <IntervalContainer>
              <Input
                pattern="^([0-9]|[1-2][0-3])$"
                width="1rem"
                style={{ padding: "1px 0", fontSize: "0.8rem" }}
                dark={dark}
                onChange={(e) => setHour(e)}
                value={hour ? hour : ""}
              />
              :
              <Input
                pattern="^([0-9]|[1-5][0-9])$"
                style={{ padding: "1px 0", fontSize: "0.8rem" }}
                width="1rem"
                dark={dark}
                onChange={(e) => setMinute(e)}
                value={minute ? minute : ""}
              />
              -周
              <Input
                width="0.8rem"
                style={{ padding: "1px", fontSize: "0.8rem" }}
                dark={dark}
                onChange={(e) => setWeek(e)}
                Ref={weekDay}
              />
            </IntervalContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <ButtonComponent
                style={{
                  fontSize: "0.8rem",
                  margin: "0 1px",
                  padding: "0 2px",
                }}
                dark={dark}
                type="submit"
              >
                提交
              </ButtonComponent>
              <ButtonComponent
                style={{
                  fontSize: "0.8rem",
                  margin: "0 1px",
                  padding: "0 2px",
                }}
                dark={dark}
                confirm={false}
                type="button"
                onClick={() => {
                  setHour(null);
                  setMinute(null);
                  setWeek(null);
                }}
              >
                清空
              </ButtonComponent>
            </div>
          </form>
        </MsgCard>
        <MsgSpan style={{ display: "flex", alignItems: "center" }}>
          <ButtonComponent
            style={{
              height: "fit-content",
              width: "2rem",
              fontSize: "0.8rem",
              marginLeft: "3px",
              padding: 0,
              textWrap: "wrap",
            }}
            dark={dark}
            onClick={() => setConfigModal(true)}
          >
            重置配置
          </ButtonComponent>
        </MsgSpan>
      </ComponentMsg>
    </Container>
  );
}
