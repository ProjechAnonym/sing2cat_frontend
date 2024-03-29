import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { FecthConfig } from "./utlis/fetchConfig";
import { lightTheme, darkTheme } from "./theme";
import { routes } from "./pages/routes";
import { ThemeProvider } from "styled-components";
import { Container, RouteContainer } from "./pages/container";
import Footer from "./pages/footer";
import Header from "./pages/header";
import "./assets/fonts/fonts.css";
function App() {
  const dispatch = useAppDispatch();
  const [head, setHead] = useState(0);
  const [foot, setFoot] = useState(0);
  const config = useAppSelector((state) => state.config.config);
  const dark = useAppSelector((state) => state.style.dark);
  useEffect(() => {
    if (Object.keys(config).length === 0) {
      dispatch(FecthConfig());
    }
  }, [dispatch, config]);
  return (
    <div className="App">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Container>
          <Header
            onHeight={(e) => setHead(e)}
            data={[
              { label: "a", value: [{ label: "b", value: { key: "c" } }] },
            ]}
          />
          <RouteContainer $foot={foot} $head={head}>
            <BrowserRouter>
              <Routes>
                {routes.map((route, i) => (
                  <Route
                    path={route.path}
                    key={`${route.name}-${i}`}
                    element={route.component}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </RouteContainer>
          <Footer onHeight={(e) => setFoot(e)} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
