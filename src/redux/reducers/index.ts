import {combineReducers} from 'redux';

import {quizzesReducer} from './quizzes';

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
});

export default rootReducer;
