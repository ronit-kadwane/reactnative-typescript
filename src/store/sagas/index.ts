/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';

import * as types from '../actions/types';

import loginSaga from './loginSaga';
import noteSaga from './noteSaga';
import patchNoteSaga from './patchNoteSaga';
import postNoteSaga from './postNoteSaga';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.GET_NOTES_REQUEST, noteSaga),
    takeEvery(types.PATCH_NOTE_REQUEST, patchNoteSaga),
    takeEvery(types.POST_NOTE_REQUEST, postNoteSaga),
  ]);
}
