import { useAppSelector, useAppDispatch } from "../../hooks";
import { useRef, useEffect, useState, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import { setDark, setStatus } from "../../slice";
import { Toggle } from "../../components/toggle";
import { Modal } from "../../components/modals/modal";
import { Load } from "../../components/load";
import { Notification } from "@douyinfe/semi-ui";
import { Container, Img, Span, StyledDropList, Icon } from "./style";
import { deleteComponents } from "../../utlis/editComponents";
export default function Header(props: {
  data: Array<any>;
  onHeight: (data: number) => void;
  onDelete?: (status: boolean) => void;
  erasable?: boolean;
  onClick: (value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  }) => void;
}) {
  const nav = useNavigate();
  const container = useRef<HTMLDivElement>(null);
  const dark = useAppSelector((state) => state.style.dark);
  const config = useAppSelector((state) => state.config.config);
  const token = useAppSelector((state) => state.identity.token);
  const status = useAppSelector((state) => state.identity.status);
  const dispatch = useAppDispatch();
  const { data, onHeight, onDelete, erasable, onClick } = props;
  const [modal, setModal] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [deleteItem, setDeleteItem] = useState<{
    label: string;
    name: string;
  } | null>(null);
  useEffect(() => {
    onHeight(container.current!.offsetHeight);
  }, [container.current?.offsetHeight]);
  return (
    <Container ref={container}>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        title="确认删除?"
        onConfirm={() => {
          setDeleteStatus(true);
          deleteComponents(config, token, deleteItem!)
            .then((status) => {
              setDeleteStatus(false);
              setModal(false);
              onDelete && onDelete(status);
              status
                ? Notification.success({
                    title: "通知",
                    content: `删除${deleteItem?.label}组${deleteItem?.name}成功`,
                    duration: 3,
                    theme: "light",
                  })
                : Notification.error({
                    title: "通知",
                    content: `删除${deleteItem?.label}组${deleteItem?.name}失败,遭遇未知错误`,
                    duration: 3,
                    theme: "light",
                  });
            })
            .catch((error) => {
              setDeleteStatus(false);
              Notification.error({
                title: "通知",
                content: error,
                duration: 3,
                theme: "light",
              });
            });
        }}
      >
        <Load open={deleteStatus}>
          <div style={{ fontFamily: "Dingding" }}>
            您将要删除{deleteItem?.label}组的{deleteItem?.name}
            ,是否确认?
          </div>
        </Load>
      </Modal>
      <div style={{ display: "flex" }}>
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
      </div>
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
                width="4rem"
                itemHeight="1rem"
                itemFontSize="0.9rem"
                labelHeight="1.1rem"
                labelFontSize="1rem"
                groupHeight="1.1rem"
                groupFontSize="1rem"
                data={data}
                erasable={erasable}
                onDelete={(data) => {
                  setModal(true);
                  setDeleteItem(data);
                }}
                onClick={(data) => onClick(data)}
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
                erasable={erasable}
                onDelete={(data) => {
                  setModal(true);
                  setDeleteItem(data);
                }}
                onClick={(data) => onClick(data)}
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
              <Span
                onClick={() => {
                  nav("/");
                  dispatch(setStatus(false));
                }}
              >
                <Icon className="iconfont icon-exit_fill" />
                退出
              </Span>
              <Span
                onClick={() =>
                  status
                    ? nav("/add")
                    : Notification.error({
                        title: "通知",
                        content: "请先登录",
                        duration: 3,
                        theme: "light",
                      })
                }
              >
                <Icon className="iconfont icon-Additem" />
                添加
              </Span>
              <Span
                onClick={() => {
                  status
                    ? nav("/home")
                    : Notification.error({
                        title: "通知",
                        content: "请先登录",
                        duration: 3,
                        theme: "light",
                      });
                }}
              >
                <Icon className="iconfont icon-shouye" />
                首页
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
              <Span
                onClick={() => {
                  nav("/");
                  dispatch(setStatus(false));
                }}
              >
                <Icon className="iconfont icon-exit_fill" />
                退出
              </Span>
              <Span
                onClick={() =>
                  status
                    ? nav("/add")
                    : Notification.error({
                        title: "通知",
                        content: "请先登录",
                        duration: 3,
                        theme: "light",
                      })
                }
              >
                <Icon className="iconfont icon-Additem" />
                添加
              </Span>
              <Span
                onClick={() => {
                  status
                    ? nav("/home")
                    : Notification.error({
                        title: "通知",
                        content: "请先登录",
                        duration: 3,
                        theme: "light",
                      });
                }}
              >
                <Icon className="iconfont icon-shouye" />
                首页
              </Span>
            </div>
          )
        }
      </Media>
    </Container>
  );
}
