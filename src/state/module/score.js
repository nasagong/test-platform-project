import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const INCREASE = "INCREASE";
const INITIALIZE = "INITIALIZE";

export const increase = createAction(INCREASE);
export const initialize = createAction(INITIALIZE);

const initialState = {
  score: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => ({ score: state.score + 1 }),
    [INITIALIZE]: (state) => ({ score: state.score = 1 })
  },
  initialState
);

export default counter;