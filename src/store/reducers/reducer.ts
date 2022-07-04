// -------------------------------------------------
// Mock
// -------------------------------------------------
import { IMockInitial } from '../mock';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ActionType, InitialActionType, separateObject } from '../types';

export const reducer = (state = IMockInitial, action: InitialActionType) => {
  switch (action.type) {
    case ActionType.CREATE_PERSON:
      return {
        person: [...state.person, action.payload],
      };

    case ActionType.EDIT_PERSON:
      return {
        person: state.person.map((item: separateObject) =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };

    case ActionType.DELETE_PERSON:
      return {
        person: state.person.filter(
          (item: separateObject) => item.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};
