import {Quizzes} from '../constants/quizzes';

export const getQuizzesList = data => {
  return {
    type: Quizzes.getQuizzes,
    payload: data,
  };
};
