/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../utils/createReducer';
import * as types from '../actions/types';
import { Loading } from '../../models/reducers/loading';

const initialState: Loading = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: Loading) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state: Loading) {
    return { ...state, isLoginLoading: false };
  },
});
