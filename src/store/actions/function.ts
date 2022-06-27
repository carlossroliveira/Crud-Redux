// -------------------------------------------------
// Types
// -------------------------------------------------
import { Dispatch } from 'redux';

import { ActionType, InitialActionType, separateObject } from '../types';

export const create = (value: separateObject) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.CREATE_PERSON,
      payload: value,
    });
  };
};

export const edit = (value: separateObject) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.EDIT_PERSON,
      payload: value,
    });
  };
};
