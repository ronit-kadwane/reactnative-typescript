/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../utils/createReducer';
import * as types from '../actions/types';
import ThemeState from '../../models/reducers/theme';
import { ThemeToggleAction } from '../../models/actions/theme';

const initialState: ThemeState = {
  isDark: false,
};

export const themeReducer = createReducer(initialState, {
  [types.TOGGLE_THEME](state: ThemeState, action: ThemeToggleAction) {
    return { ...state, isDark: action.isDark };
  },
});
