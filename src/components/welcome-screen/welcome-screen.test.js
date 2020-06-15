import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`WelcomeScreen should be rendered correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      gameTime = {5}
      errorsCount = {3}
      onWelcomeButtonClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
