import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as noteActions from '../actions/noteAction';
import { postNote } from '../../services/noteService';
import app from '../../../app.json';

// Our worker Saga that logins the user
export default function* postNoteSaga(action) {
  try {
    const response = yield call(postNote, action.title);
    yield put(noteActions.getNotesRequest());
  } catch (error) {
    yield put(noteActions.postNotesFailed());
    setTimeout(() => {
      Alert.alert(app.displayName, error.code);
    }, 100);
  }
}
