// -------------------------------------------------
// Mock
// -------------------------------------------------
import { IMockInitial } from '../mock';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ActionType, InitialActionType } from '../types';

export const reducer = (state = IMockInitial, action: InitialActionType) => {
  switch (action.type) {
    case ActionType.CREATE_PERSON:
      return {
        person: [...state.person, action.payload],
      };
    default:
      return state;
  }
};
