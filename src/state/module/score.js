import { handleAction } from "redux-actions";
import { createAction } from "redux-actions";

const INCREASE = "INCREASE";
export const increase = createAction(INCREASE);

const initialState = {
  score: 0,
};

const counter = handleAction(
  {
    [INCREASE]: (state) => ({ score: state.score + 1 }),
  },
  initialState
);

export default counter;
