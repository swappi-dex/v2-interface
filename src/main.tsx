import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import Router from "./router";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import "custom-react-scrollbar/dist/style.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

(function () {
  if (location.hash) {
    const url = new URL(location.href);
    url.hash = "";
    const newUrl = url.toString();
    history.replaceState(null, "", newUrl);
  }
})();
