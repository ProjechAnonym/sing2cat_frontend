import { useEffect, useRef, useState, FC, RefObject } from "react";
import { DefaultContent, InputField, Span, Icon, Img } from "./style";
import { Input } from "../../components/input";
import { Tooltip } from "../../components/toolTip";
import { ButtonComponent } from "../../components/button";
import { Notification } from "@douyinfe/semi-ui";
import { displayPic } from "./utils";
interface ContentProps {
  dark: boolean;
  onChangeName?: (name: string) => void;
  onChangeUrl?: (url: string) => void;
  api: string;
  genre: string;
  onChangeFile: (file: File | null) => void;
  onChangeIconLink: (link: string) => void;
  ref?: RefObject<HTMLDivElement>;
}
export const Content: FC<ContentProps> = ({
  dark,
  onChangeName,
  onChangeUrl,
  onChangeFile,
  onChangeIconLink,
  api,
  genre,
  ref,
}) => {
  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [iconLink, setIconLink] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const upload = useRef<HTMLInputElement>(null);
  useEffect(() => {
    file &&
      displayPic(file, (e) => {
        onChangeFile(file);
        setIcon(e as string);
        setIconLink(
          `${api}/static/${genre}/${name}.${file.name.substring(
            file.name.lastIndexOf(".") + 1
          )}`
        );
      });
    iconLink !== "" && onChangeIconLink(iconLink);
  }, [iconLink, file]);
  return (
    <DefaultContent ref={ref}>
      <div
        style={{
          width: "58%",
          height: "9.8rem",
        }}
      >
        <InputField>
          <Span>
            组件名称
            <Tooltip descripton="输入组件名称" width="4.8rem">
              <Icon className="iconfont icon-rename-box " />
            </Tooltip>
          </Span>
          <Input
            dark={dark}
            onChange={(e) => {
              onChangeName && onChangeName(e);
              setName(e);
            }}
            required={true}
          />
        </InputField>
        <InputField>
          <Span>
            组件链接
            <Tooltip descripton="输入组件链接" width="4.8rem">
              <Icon className="iconfont icon-bg-link " />
            </Tooltip>
          </Span>
          <Input
            dark={dark}
            type="url"
            onChange={(e) => onChangeUrl && onChangeUrl(e)}
            required={true}
          />
        </InputField>
        <InputField>
          <Span>
            图标链接
            <Tooltip descripton="输入图标链接" width="4.8rem">
              <Icon className="iconfont icon-tupian " />
            </Tooltip>
          </Span>
          <Input
            dark={dark}
            type="url"
            onChange={(e) => {
              setIcon(e);
              setIconLink(e);
            }}
            value={iconLink}
            disabled={file ? true : false}
          />
        </InputField>
      </div>
      <div
        style={{
          width: "41%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "9.8rem",
        }}
      >
        <Img src={icon} alt="未加载图片"></Img>

        <div
          style={{
            height: "15%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ButtonComponent
            type="button"
            style={{
              width: "fit-content",
              fontSize: "0.8rem",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "0 3px",
            }}
            dark={dark}
            disabled={iconLink ? true : false}
            onClick={() =>
              name !== ""
                ? upload.current?.click()
                : Notification.error({
                    title: "通知",
                    content: "请先输入组件名称",
                    duration: 3,
                    theme: "light",
                  })
            }
          >
            {iconLink ? "禁用" : <Icon className="bi bi-upload" />}
          </ButtonComponent>
          <ButtonComponent
            type="button"
            style={{
              width: "fit-content",
              fontSize: "0.8rem",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "0 3px",
            }}
            dark={dark}
            confirm={false}
            onClick={() => {
              upload.current!.value = "";
              setFile(null);
              setIcon("");
              setIconLink("");
              onChangeFile(null);
            }}
          >
            清空
          </ButtonComponent>
        </div>

        <input
          ref={upload}
          id="upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files![0])}
        />
      </div>
    </DefaultContent>
  );
};
