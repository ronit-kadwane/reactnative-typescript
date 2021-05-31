import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as noteAction from '../actions/noteAction';
import { getNotes } from '../../services/noteService';
import app from '../../../app.json';
import { NoteResponse } from '../../models/api/note';

// Our worker Saga that logins the user
export default function* getNotesAsysc(action) {
  // yield put(noteAction.enableLoader());

  try {
    const response = yield call(getNotes);
    if (response) {
      const data: NoteResponse[] = [];
      response.forEach((documentSnapshot) => {
        const { title, checked } = documentSnapshot.data();
        const note: NoteResponse = {
          uid: documentSnapshot.id,
          title,
          checked,
        };
        data.push(note);
      });
      console.log('DATA length', data.length);
      yield put(noteAction.getNotesResponse(data));
      // yield put(noteAction.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
    } else {
      yield put(noteAction.getNotesFailed());
      // yield put(noteAction.disableLoader());
      setTimeout(() => {
        Alert.alert(app.displayName, 'Something went wrong');
      }, 100);
    }
  } catch (error) {
    yield put(noteAction.getNotesFailed());
    // yield put(noteAction.disableLoader());
    setTimeout(() => {
      Alert.alert(app.displayName, 'Something went wrong');
    }, 100);
  }
}
