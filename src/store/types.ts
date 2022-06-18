// -------------------------------------------------
// RootReducer
// -------------------------------------------------
import { rootReducer } from '.';

// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IMockData {
  person: {
    cpf?: string;
    name?: string;
    city?: string;
    state?: string;
    id?: string;
  }[];
}

export enum ActionType {
  CREATE_PERSON = 'create_Person',
  EDIT_PERSON = 'edit_Person',
  DELETE_PERSON = 'delete_person',
}

export interface ICreatePerson {
  type: typeof ActionType.CREATE_PERSON;
  payload: IMockData;
}
export interface IEditPerson {
  type: typeof ActionType.EDIT_PERSON;
  payload: IMockData;
}
export interface IDeletePerson {
  type: typeof ActionType.DELETE_PERSON;
  payload: IMockData;
}

export type InitialActionType = ICreatePerson | IEditPerson | IDeletePerson;

export type RootStateType = ReturnType<typeof rootReducer>;
