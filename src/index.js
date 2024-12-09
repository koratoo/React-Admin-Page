import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css"; // 글로벌 스타일 추가
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
