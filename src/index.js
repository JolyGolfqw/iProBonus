import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createAuth } from "./store/actions";
import { DefaultAuthData } from "./api";

store.dispatch(createAuth(DefaultAuthData));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
