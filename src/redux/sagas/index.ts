import {all} from 'redux-saga/effects';
import {getQuizzes} from './quizzes';

export default function* rootSaga() {
  yield all([getQuizzes()]);
}
