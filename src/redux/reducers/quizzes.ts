import {Quizzes} from '../constants/quizzes';

const initialState = {};

export const quizzesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case Quizzes.getQuizzes:
      return {...state, quizzes: action.payload};
    default:
      return state;
  }
};
