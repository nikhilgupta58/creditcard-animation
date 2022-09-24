import React from "react";
import { render } from "react-dom";
import { ThemeProvider, theme } from "@chakra-ui/core";
import App from "./app";
import "./index.css";

const rootElement = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
