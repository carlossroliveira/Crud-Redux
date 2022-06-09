import { mock } from '../mock';
import { create_Person, initialActionType } from '../types';

export function reducer(state = mock, action: initialActionType) {
  switch (action.type) {
    case create_Person:
      return {
        state: [...state.person, action.person],
      };
    default:
      return state;
  }
}
