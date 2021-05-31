import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as loginActions from '../actions/loginActions';
import loginUser from '../../services/loginService';
import app from '../../../app.json';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  try {
    const response = yield call(loginUser, action.email, action.password);
    const { user } = response;
    if (user) {
      yield put(loginActions.onLoginResponse(user));
      yield put(loginActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
      setTimeout(() => {
        Alert.alert(app.displayName, 'Something went wrong');
      }, 100);
    }
  } catch (error) {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert(app.displayName, error.code);
    }, 100);
  }
}
