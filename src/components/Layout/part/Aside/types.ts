// -------------------------------------------------
// Types e Constants
// -------------------------------------------------
export const READ = '/';
export const CREATE = '/Create';
export const UPDATE = '/Update';
export const UPDATE_LIST = '/Update/list/';
export const DELETE = '/Delete';

export type stylesTypes =
  | typeof READ
  | typeof CREATE
  | typeof UPDATE
  | typeof UPDATE_LIST
  | typeof DELETE;
