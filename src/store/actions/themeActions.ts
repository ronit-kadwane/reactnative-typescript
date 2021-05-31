/*
 * Reducer actions related with login
 */
import * as types from './types';

export const setIsDarkTheme = (value: boolean) => {
  return {
    type: types.TOGGLE_THEME,
    isDark: value,
  };
};
