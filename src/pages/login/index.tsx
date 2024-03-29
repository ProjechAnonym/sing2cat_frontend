import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setInit } from "../../slice";
import { KeepLogin } from "../../utlis/verifySteps";
import { Container, LoginContainer, ButtonContainer, Span } from "./style";
import { ButtonComponent } from "../../components/button";
import { Input } from "../../components/input";
import { Tooltip } from "../../components/toolTip";
export default function Login() {
  const [password, setPassword] = useState("");
  // loading默认是否,要进行自动登录判断需要获取上一次变化时loading状态
  // 否则一进入登录页面会自动登录
  const [lastLoading, setLastLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  // init用于表示是否登录过退出登录回到此界面
  // 如果没有,那么每次退出登录回到此界面都会进行一次自动登录
  const init = useAppSelector((state) => state.identity.init);
  // 登录时loading置为真,此时将进入转圈圈状态
  const loading = useAppSelector((state) => state.identity.loading);
  // status用于表示登录的结果
  const status = useAppSelector((state) => state.identity.status);
  // 获取配置文件
  const config = useAppSelector((state) => state.config.config);
  // dispatch用于进行store状态的设置
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  useEffect(() => {
    // 登录成功则跳转路由
    if (status) {
      nav(`/home`);
    }
  }, [status]);

  useEffect(() => {
    // init为false说明第一次进入此界面,尝试进行自动登录
    // !init逻辑主要是为了第一次挂载时执行,之后都不会执行
    if (Object.keys(config).length !== 0 && !init) {
      // 根据浏览器存储的token进行登录
      dispatch(KeepLogin(config));
      // init置为真
      dispatch(setInit(true));
    } else {
      // 此处为loading发生变化后的登录失败逻辑
      // 只有submit为条件,即表单提交之后,随即进入loading状态
      // 那么在loading时对话框就会弹出,不使用loading而使用上次的加载状态同理
      // 表单提交之后loading为true,直接用loading就会转圈圈的时候弹对话框
      if (lastLoading && (submit || !status)) {
        // loading变化后status的结果也出来了
        if (submit && !status) {
          console.log("用户名或密码错误");
        }
        if (!status && !submit) {
          console.log("token到期");
        }
        // 稳一手
        dispatch(setInit(true));
      }
    }

    // 不管如何,组件挂载记录一次loading状态
    // 之后每次loading变化都记录一次loading状态
    setLastLoading(loading);
  }, [loading, config]);
  return (
    <Container>
      <LoginContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log(password);
          setSubmit(true);
        }}
      >
        <Span style={{ margin: "5px 0" }}>
          Secret
          <Tooltip descripton="请输入密钥" width="5rem">
            <Span>
              <i className="bi bi-lock-fill" />
            </Span>
          </Tooltip>
        </Span>
        <Input
          style={{ fontSize: "1.2rem", height: "1.5rem" }}
          width="95%"
          type="password"
          onChange={(e) => setPassword(e)}
        />
        <ButtonContainer>
          <ButtonComponent style={{ margin: "5px 5px" }} type="submit">
            登录
          </ButtonComponent>
          <ButtonComponent
            confirm={false}
            style={{
              margin: "5px 5px",
            }}
          >
            重置
          </ButtonComponent>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}
