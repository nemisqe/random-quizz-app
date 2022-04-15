import {call, put} from 'redux-saga/effects';
import {getQuizzesList} from '../actions/quizzes';
import firestore from '@react-native-firebase/firestore';

const getAllQuizzes = async () => {
  const data = firestore().collection('quizzes').get();
  return data;
};

const getNarutoQuiz = async () => {
  const {_data} = await firestore()
    .collection('quizzes')
    .doc('hardest-naruto-quiz')
    .get();
  return _data;
};

interface ResponseGenerator {
  data?: {
    id: string;
    quizName: string;
  };
}

export function* getQuizzes() {
  const { _docs }: ResponseGenerator = yield call(
    async () => await getAllQuizzes(),
  );
  yield put(getQuizzesList(_docs));
}
