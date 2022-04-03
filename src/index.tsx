import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { jsx, ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
