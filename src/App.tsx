import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { FecthConfig } from "./utlis/fetchConfig";
import { fetchComponents } from "./utlis/editComponents";
import { lightTheme, darkTheme } from "./theme";
import { routes } from "./pages/routes";
import { ThemeProvider } from "styled-components";
import { Container, RouteContainer } from "./pages/container";
import Footer from "./pages/footer";
import Header from "./pages/header";
import { Notification } from "@douyinfe/semi-ui";
import "./assets/fonts/fonts.css";
function App() {
  const dispatch = useAppDispatch();
  const [head, setHead] = useState(0);
  const [foot, setFoot] = useState(0);
  const [fetch, setFetch] = useState(true);
  const [components, setComponents] = useState([
    { label: "default", value: [{ label: "None", value: null }] },
  ]);
  const config = useAppSelector((state) => state.config.config);
  const dark = useAppSelector((state) => state.style.dark);
  const status = useAppSelector((state) => state.identity.status);
  const token = useAppSelector((state) => state.identity.token);
  useEffect(() => {
    Object.keys(config).length === 0 && dispatch(FecthConfig());
    status &&
      fetch &&
      fetchComponents(config, token)
        .then((data) => {
          setComponents(data!);
          setFetch(false);
        })
        .catch((error) => {
          Notification.error({
            title: "通知",
            content: error,
            duration: 3,
            theme: "light",
          });
          setFetch(false);
        });
  }, [dispatch, config, status, fetch]);
  return (
    <div className="App">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Header
              onHeight={(e) => setHead(e)}
              data={components}
              erasable={components[0].label === "default" ? false : true}
              onDelete={(status) => status && setFetch(true)}
            />
            <RouteContainer $foot={foot} $head={head}>
              <Routes>
                {routes.map((route, i) => (
                  <Route
                    path={route.path}
                    key={`${route.name}-${i}`}
                    element={route.component}
                  />
                ))}
              </Routes>
            </RouteContainer>
            <Footer onHeight={(e) => setFoot(e)} />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
