import { INCREMENTAR } from '../types';

export const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;

    default:
      return state;
  }
};
