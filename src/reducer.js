import {extend, isGenreAnswerCorrect, isArtistAnswerCorrect} from "./utils.js";
import {GameType} from "./const.js";
import questions from "./mocks/questions.js";

const MAX_MISTAKES = 3;
const GAME_TIME = 5;

const initialState = {
  mistakes: 0,
  maxMistakes: MAX_MISTAKES,
  gameTime: GAME_TIME,
  step: -1,
  questions,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};


const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (question, userAnswer) => {
    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: {
        question, userAnswer
      },
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:

      const question = action.payload.question;
      const userAnswer = action.payload.userAnswer;

      let answerIsCorrect = false;

      switch (question.type) {
        case GameType.ARTIST:
          answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
          break;
        case GameType.GENRE:
          answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
          break;
      }

      const mistakesToIncrease = answerIsCorrect ? 0 : 1;

      const mistakes = state.mistakes + mistakesToIncrease;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes: state.mistakes + mistakesToIncrease,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
