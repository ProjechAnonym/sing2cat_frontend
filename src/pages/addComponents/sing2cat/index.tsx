import { useState } from "react";
import { useAppSelector } from "../../../hooks";
import { AddContent } from "../style";
import { Content } from "../content";
import { CustomContainer, Icon, InputField, Span } from "../style";
import { Input } from "../../../components/input";
import { Tooltip } from "../../../components/toolTip";
import { ButtonComponent } from "../../../components/button";
import { Notification } from "@douyinfe/semi-ui";
import { AddComponent } from "./utils";
export default function Sing2cat(props: {
  api: string;
  onAdd: (status: boolean) => void;
  token: string;
}) {
  const { api, onAdd, token } = props;
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [iconLink, setIconLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [secret, setSecret] = useState<string>("");
  const dark = useAppSelector((state) => state.style.dark);
  return (
    <AddContent
      onSubmit={(e) => {
        e.preventDefault();
        url !== "" && name !== ""
          ? AddComponent(
              api,
              url,
              name,
              "sing2cat",
              iconLink,
              token,
              secret,
              file
            )
              .then((status) => {
                status
                  ? onAdd(status)
                  : Notification.error({
                      title: "通知",
                      content: "未知错误",
                      duration: 3,
                      theme: "light",
                    });
              })
              .catch((error) =>
                Notification.warning({
                  title: "通知",
                  content: error,
                  duration: 3,
                  theme: "light",
                })
              )
          : Notification.warning({
              title: "通知",
              content: "请输入url和组件名称",
              duration: 3,
              theme: "light",
            });
      }}
    >
      <Content
        genre="sing2cat"
        api={api}
        dark={dark}
        onChangeName={(e) => setName(e)}
        onChangeUrl={(e) => setUrl(e)}
        onChangeFile={(e) => setFile(e)}
        onChangeIconLink={(e) => setIconLink(e)}
      />
      <CustomContainer $restHeight={150}>
        <InputField style={{ width: "100%" }}>
          <Span>
            token
            <Tooltip descripton="请填入yacd的token" width="7.5rem">
              <Icon className="bi bi-shield-lock-fill" />
            </Tooltip>
          </Span>
          <Input
            dark={dark}
            type="text"
            width="80%"
            onChange={(e) => setSecret(e)}
          ></Input>
        </InputField>
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "end",
            alignContent: "end",
          }}
        >
          <ButtonComponent type="submit" dark={dark}>
            提交
          </ButtonComponent>
        </div>
      </CustomContainer>
    </AddContent>
  );
}
