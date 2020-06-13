import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app.jsx";

const ROOT_ELEMENT = document.getElementById(`root`);

const settings = {
  gameTime: 5,
  errorCount: 3,
};

ReactDOM.render(
    <App
      errorCount = {settings.errorCount}
      gameTime = {settings.gameTime}
    />, ROOT_ELEMENT
);
