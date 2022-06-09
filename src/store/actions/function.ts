import { create_Person, IMockData } from '../types';
import * as actionTypes from '../types';

/* export const createPerson = () => {
  return { type: create_Person };
}; */

/* export function createPerson(person: IMockData) {
  const action: actionTypes.createPerson = {
    type: create_Person,
    person,
  };
  return (dispatch: AppDispatch) => dispatch(action);
}
 */
export function createPerson(person: any) {
  const action: any = {
    type: create_Person,
    person,
  };
  return action;
}
