// -------------------------------------------------
// Types
// -------------------------------------------------
import { Dispatch } from 'redux';

import { ActionType, InitialActionType, separateObject } from '../types';

export const createItem = (value: separateObject) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.CREATE_PERSON,
      payload: value,
    });
  };
};

export const editItem = (value: separateObject) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.EDIT_PERSON,
      payload: value,
    });
  };
};

export const deleteItem = (value: separateObject) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.DELETE_PERSON,
      payload: value,
    });
  };
};
