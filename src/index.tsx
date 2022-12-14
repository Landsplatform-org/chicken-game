import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { SidebarProvider } from "./context/UserPageSidebarContext";
import { NewsModalProvider } from "./context/NewsModalContext";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <SidebarProvider>
  <NewsModalProvider>
    <App />
  </NewsModalProvider>
  </SidebarProvider>
  //</React.StrictMode>
);

reportWebVitals();
