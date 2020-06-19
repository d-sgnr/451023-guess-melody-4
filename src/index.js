import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import settings from "./mocks/settings.js";

const ROOT_ELEMENT = document.getElementById(`root`);

ReactDOM.render(
    <App
      gameTime = {settings.GAME_TIME}
      errorsCount = {settings.ERRORS_COUNT}
      questions = {questions}
    />, ROOT_ELEMENT
);
