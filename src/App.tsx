import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { FecthConfig } from "./utlis/fetchConfig";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { Container } from "./pages/container";
import Header from "./pages/header";
import "./assets/fonts/fonts.css";
function App() {
  const dispatch = useAppDispatch();

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
          <Header></Header>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
