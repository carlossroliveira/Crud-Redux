// -------------------------------------------------
// RootReducer
// -------------------------------------------------
import { rootReducer } from '.';

// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IMockData {
  person: separateObject[];
}
export interface separateObject {
  cep?: string;
  name?: string;
  city?: string;
  state?: string;
  id?: string;
}

export enum ActionType {
  CREATE_PERSON = 'create_Person',
  EDIT_PERSON = 'edit_Person',
  DELETE_PERSON = 'delete_person',
}

export interface ICreatePerson {
  type: typeof ActionType.CREATE_PERSON;
  payload: separateObject;
}
export interface IEditPerson {
  type: typeof ActionType.EDIT_PERSON;
  payload: separateObject;
}
export interface IDeletePerson {
  type: typeof ActionType.DELETE_PERSON;
  payload: separateObject;
}

export type InitialActionType = ICreatePerson | IEditPerson | IDeletePerson;

export type RootStateType = ReturnType<typeof rootReducer>;
