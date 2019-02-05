import "semantic-ui-css/semantic.min.css";

import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { env } from "./config";

import App from "./components/App";

ReactDOM.render(<App env={env} />, document.querySelector("#root"));

registerServiceWorker();
