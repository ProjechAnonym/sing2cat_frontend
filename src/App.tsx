import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setDark } from "./slice";
import { FecthConfig } from "./utlis/fetchConfig";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider, useTheme } from "styled-components";
import { ButtonComponent } from "./components/button/button";
import { Input } from "./components/input/input";
import { Tooltip } from "./components/toolTip/toolTip";
import "./assets/fonts/fonts.css";
import { PopModal } from "./components/modals/popContainer/popModal";
import { PopOver } from "./components/modals/popContainer/popOver";
import { Toggle } from "./components/toggle/toggle";
import { Modal } from "./components/modals/modal/modal";
import { DropList } from "./components/dropList/dropList";
import { Anchor } from "./components/anchor/anchor";
function App() {
  const dispatch = useAppDispatch();

  const config = useAppSelector((state) => state.config.config);
  const dark = useAppSelector((state) => state.style.dark);
  useEffect(() => {
    if (Object.keys(config).length === 0) {
      dispatch(FecthConfig());
    }
  }, [dispatch, config]);
  const [visible, setVisible] = useState(false);
  const [string, setString] = useState("454545");
  return (
    <div className="App">
      <Modal
        open={visible}
        dark={dark}
        onClose={() => setVisible(false)}
        title="部分VS的户口本v和v不就是到了回复的撒fdsbkf粉红色的高峰时段和的事实v喝咖啡"
      >
        456ddsahfvbjd s快来吧fdhsafbs 法撒旦胡椒粉疯狂撒娇的不方便是对八分
      </Modal>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Anchor
          dark={dark}
          position="left"
          fixed={{
            vertival: "top",
            Vdis: "500px",
            horizon: "left",
            Hdis: "500px",
          }}
          direction="row"
          data={[
            {
              label: <i className="bi bi-7-circle" />,
              onClick: "#1",
              title: "part-1",
            },
            {
              label: <div>546</div>,
              title: "part-2",
              onClick: () => console.log(2),
            },
            { label: "风纪扣", title: "part-3", onClick: "#3" },
            { label: "part4", title: "part-4", onClick: "#4" },
            { label: "part5", title: "part-5", onClick: "#5" },
            { label: "part6", title: "part-6", onClick: "#6" },
            { label: "part7", title: "part-7", onClick: "#7" },
          ]}
        ></Anchor>
        <div
          style={{
            width: "100dvw",
            height: "100dvh",
            backgroundColor: dark ? "#313131" : "#e2fdf9",
            overflow: "auto",
          }}
        >
          <div
            id="1"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "15rem",
            }}
          >
            <ButtonComponent onClick={() => setVisible(true)}>
              modal
            </ButtonComponent>
            <ButtonComponent onClick={() => dispatch(setDark())}>
              changeColor
            </ButtonComponent>
          </div>
          <div style={{ height: "15rem" }} id="2">
            <PopModal
              dark={dark}
              title="56的撒大幅度法艰苦"
              description="56的撒大幅度法"
              position="right"
            >
              555
            </PopModal>
          </div>
          <div style={{ height: "15rem" }} id="3">
            <PopOver
              description="56"
              position="right"
              title="大厦就"
              width="5rem"
            >
              <div style={{ backgroundColor: "rebeccapurple" }}>55</div>
            </PopOver>
          </div>
          <div style={{ height: "15rem" }} id="4">
            <Input
              value={string}
              onChange={(e) => {
                console.log(e);
                setString(e);
              }}
            ></Input>
          </div>
          <div style={{ height: "15rem" }} id="5">
            <Tooltip descripton="153dasghd神病" shadowColor="red">
              51
            </Tooltip>
          </div>
          <div style={{ height: "15rem" }} id="6">
            <Toggle
              style={{ marginLeft: "2rem" }}
              onClick={(a) => console.log(a)}
              defaultColor="red"
              checkColor="blue"
            ></Toggle>
          </div>
          <div style={{ height: "15rem" }} id="7">
            <DropList
              dark={dark}
              disable={false}
              data={config.searchEngine}
              onClick={(e) => console.log(e)}
            ></DropList>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
