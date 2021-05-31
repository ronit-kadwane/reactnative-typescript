import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as noteActions from '../actions/noteAction';
import { patchNote } from '../../services/noteService';
import app from '../../../app.json';

// Our worker Saga that logins the user
export default function* patchNoteSaga(action) {
  try {
    const response = yield call(patchNote, action.uid, action.checked);
    yield put(
      noteActions.patchNotesResponse({
        uid: action.uid,
        title: action.title,
        checked: action.checked,
      })
    );
  } catch (error) {
    yield put(noteActions.patchNotesFailed());
    setTimeout(() => {
      Alert.alert(app.displayName, error.code);
    }, 100);
  }
}
