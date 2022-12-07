import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./Assets/scss/app.scss";
import { Provider } from "react-redux";
import store from "./redux/store";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);