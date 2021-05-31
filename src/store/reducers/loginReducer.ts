/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../utils/createReducer';
import * as types from '../actions/types';
import { LoginState } from '../../models/reducers/login';
import { LoginRequestState, LoginResponseState } from '../../models/actions/login';

const initialState: LoginState = {
  isLoggedIn: false,
  uid: 0,
  email: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: LoginState, action: LoginRequestState) {
    return {
      ...state,
      email: action.email,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: LoginState) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state: LoginState, action: LoginResponseState) {
    return {
      ...state,
      uid: action.response.uid,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: LoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: LoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
