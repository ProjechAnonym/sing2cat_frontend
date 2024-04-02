import { DefaultContent, InputField, Span, Icon, Img } from "./style";
import { Input } from "../../components/input";
import { Tooltip } from "../../components/toolTip";
import { ButtonComponent } from "../../components/button";
export default function Content(props: { dark: boolean }) {
  const { dark } = props;
  return (
    <DefaultContent>
      <div style={{ width: "58%", height: "fit-content" }}>
        <InputField>
          <Span>
            组件名称
            <Tooltip descripton="输入组件名称" width="4.8rem">
              <Icon className="iconfont icon-rename-box " />
            </Tooltip>
          </Span>
          <Input />
        </InputField>
        <InputField>
          <Span>
            组件链接
            <Tooltip descripton="输入组件链接" width="4.8rem">
              <Icon className="iconfont icon-bg-link " />
            </Tooltip>
          </Span>
          <Input type="url" />
        </InputField>
        <InputField>
          <Span>
            图标链接
            <Tooltip descripton="输入图标链接" width="4.8rem">
              <Icon className="iconfont icon-tupian " />
            </Tooltip>
          </Span>
          <Input type="url" />
        </InputField>
      </div>
      <div
        style={{
          width: "41%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img src="https://ts3.cn.mm.bing.net/th?id=OIP-C.neU_lyZXZpazGKjZXAlGywHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"></Img>
        <ButtonComponent
          style={{ height: "15%", fontSize: "1rem", width: "80%" }}
        >
          <Icon className="bi bi-upload" />
        </ButtonComponent>
      </div>
    </DefaultContent>
  );
}
