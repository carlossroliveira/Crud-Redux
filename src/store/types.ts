export interface IMockData {
  person: {
    cpf: string;
    name: string;
    city: string;
    state: string;
    id: string;
  }[];
}

export const create_Person = 'create_Person';

export interface createPerson {
  type: typeof create_Person;
  person: IMockData;
}

export type initialActionType = createPerson;
