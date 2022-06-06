import * as types from '../types';

export const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case types.INCREMENTAR:
      return state + 1;

    default:
      return state;
  }
};
