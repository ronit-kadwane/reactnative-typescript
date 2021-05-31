/*
 * Reducer actions related with login
 */
import { LoginResponse } from '../../models/api/login';

import * as types from './types';

export const requestLogin = (email: string, password: string) => {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
};

export const loginFailed = () => {
  return {
    type: types.LOGIN_FAILED,
  };
};

export const onLoginResponse = (response: LoginResponse) => {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
};

export const enableLoader = () => {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
};

export const disableLoader = () => {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
};

export const logOut = () => {
  return {
    type: types.LOG_OUT,
  };
};
