import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import {Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { Middleware } from "./Middleware"

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(Middleware());




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
