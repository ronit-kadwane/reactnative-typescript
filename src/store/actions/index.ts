// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = { ...loginActions, ...navigationActions, ...themeActions };
