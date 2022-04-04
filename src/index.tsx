import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { jsx, ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);