import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const welcomeButtonHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      gameTime = {5}
      errorsCount = {3}
      onWelcomeButtonClick = {welcomeButtonHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
