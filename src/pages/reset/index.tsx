import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setInit } from "../../slice";
import { Container, LoginContainer, ButtonContainer, Span } from "./style";
import { ButtonComponent } from "../../components/button";
import { Input } from "../../components/input";
import { Tooltip } from "../../components/toolTip";
import { Load } from "../../components/load";
import { Notification } from "@douyinfe/semi-ui";
import { sendEmail, editPassword } from "../../utlis/editSecret";
export default function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [valid, setValid] = useState(0);
  const [load, setLoad] = useState(false);
  const config = useAppSelector((state) => state.config.config);
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state) => state.style.dark);
  useEffect(() => {
    dispatch(setInit(true));
    valid !== 0 &&
      setTimeout(() => {
        setValid(valid - 1);
      }, 1000);
  }, [valid]);
  return (
    <Container>
      <Load open={load} window={true}></Load>
      <LoginContainer
        onSubmit={(e) => {
          e.preventDefault();
          setLoad(true);
          editPassword(email, captcha, password, config)
            .then((data: boolean) => {
              if (data) {
                setLoad(false);
                Notification.success({
                  title: "通知",
                  content: "修改完成,3秒后跳转至登录页",
                  theme: "light",
                  duration: 3,
                });
                setTimeout(() => nav("/"), 3000);
              } else {
                setLoad(false);
                Notification.error({
                  title: "通知",
                  content: "未知错误",
                  theme: "light",
                  duration: 3,
                });
              }
            })
            .catch((error: any) => {
              setLoad(false);
              Notification.error({
                title: "通知",
                content: error,
                theme: "light",
                duration: 3,
              });
            });
        }}
      >
        <Span style={{ margin: "5px 0" }}>
          邮箱
          <Tooltip descripton="请输入邮箱" width="5rem">
            <Span>
              <i className="bi bi bi-envelope-check-fill" />
            </Span>
          </Tooltip>
        </Span>
        <Input
          dark={dark}
          style={{ fontSize: "1.2rem", height: "1.5rem" }}
          width="15rem"
          type="email"
          required={true}
          onChange={(e) => setEmail(e)}
          value={email}
        />

        <Span style={{ margin: "5px 0" }}>
          验证码
          <Tooltip descripton="请输入验证码" width="5rem">
            <Span>
              <i className="bi bi-shield-lock-fill" />
            </Span>
          </Tooltip>
        </Span>
        <div
          style={{
            display: "flex",
            width: "15rem",
          }}
        >
          <Input
            dark={dark}
            style={{ fontSize: "1.2rem", height: "1.5rem" }}
            width="40%"
            type="text"
            maxLength={6}
            pattern="\d*"
            required={true}
            onChange={(e) => setCaptcha(e)}
            value={captcha}
          />
          <ButtonComponent
            disabled={valid === 0 ? false : true}
            style={{
              margin: "0 0 0 1rem",
              width: "fit-content",
            }}
            onClick={() => {
              email === ""
                ? Notification.warning({
                    title: "通知",
                    duration: 3,
                    theme: "light",
                    content: "填入邮箱",
                  })
                : sendEmail(email, config)
                    .then((data: boolean) => {
                      data
                        ? setValid(120)
                        : Notification.error({
                            title: "通知",
                            duration: 3,
                            theme: "light",
                            content: "未知错误",
                          });
                    })
                    .catch((error: any) => {
                      Notification.error({
                        title: "通知",
                        duration: 3,
                        theme: "light",
                        content: error,
                      });
                    });
            }}
            type="button"
          >
            {valid === 0 ? "发送验证码" : valid}
          </ButtonComponent>
        </div>
        <Span style={{ margin: "5px 0" }}>
          Secret
          <Tooltip descripton="请输入密钥" width="5rem">
            <Span>
              <i className="bi bi-lock-fill" />
            </Span>
          </Tooltip>
        </Span>
        <Input
          dark={dark}
          style={{ fontSize: "1.2rem", height: "1.5rem" }}
          width="95%"
          type="password"
          required={true}
          onChange={(e) => setPassword(e)}
          value={password}
        />
        <ButtonContainer>
          <ButtonComponent style={{ margin: "5px 5px" }} type="submit">
            重置密码
          </ButtonComponent>
          <ButtonComponent
            confirm={false}
            style={{
              margin: "5px 5px",
            }}
            type="button"
            onClick={() => {
              setCaptcha("");
              setEmail("");
              setPassword("");
            }}
          >
            清空
          </ButtonComponent>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}
