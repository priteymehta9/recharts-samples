import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";
import "hammerjs";

import App from "./app/App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(<App />, document.querySelector("my-app"));
