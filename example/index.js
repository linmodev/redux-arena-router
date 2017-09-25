import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Frame from "./Frame";
import { createArenaStore } from "redux-arena";

const store = createArenaStore();

let appDom = document.getElementById("app");

const render = FrameComponent => {
  ReactDOM.render(
    <Provider store={store}>
      <FrameComponent />
    </Provider>,
    appDom,
    function() {
      document.getElementById("app").className = "";
    }
  );
};

render(Frame);

if (module.hot) {
  module.hot.accept("./Frame", () => {
    const UpdatedFrame = require("./Frame").default;
    render(UpdatedFrame);
  });
}
