import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { QuoteContextProvider } from "./context/QuoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuoteContextProvider>
      <App />
    </QuoteContextProvider>
  </React.StrictMode>
);
