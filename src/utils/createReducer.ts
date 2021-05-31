/**
 * Will dynamically create reducers
 * enforcing a unique way to describe reducers
 * @param initialState
 * @param handlers
 * @returns state of store
 */
const createReducer = (initialState: any, handlers: any) => {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export default createReducer;
