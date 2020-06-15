import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const ROOT_ELEMENT = document.getElementById(`root`);

const Settings = {
  GAME_TIME: 5,
  ERRORS_COUNT: 3,
};

ReactDOM.render(
    <App
      gameTime = {Settings.GAME_TIME}
      errorsCount = {Settings.ERRORS_COUNT}
    />, ROOT_ELEMENT
);
