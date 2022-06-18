// -------------------------------------------------
// Types
// -------------------------------------------------
import { Dispatch } from 'redux';

import { ActionType, IMockData, InitialActionType } from '../types';

export const createPerson = () => {
  return { type: ActionType.CREATE_PERSON };
};

export const create = (value: IMockData) => {
  return (dispatch: Dispatch<InitialActionType>) => {
    dispatch({
      type: ActionType.CREATE_PERSON,
      payload: value,
    });
  };
};

/* export function createPerson(person: IMockData) {
  const action: actionTypes.createPerson = {
    type: create_Person,
    person,
  };
  return (dispatch: AppDispatch) => dispatch(action);
}
 */
/* export function createPerson(person: any) {
  const action: any = {
    type: CREATE_PERSON,
    person,
  };
  return action;
}
 */
