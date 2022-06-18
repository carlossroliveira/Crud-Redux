// -------------------------------------------------
// Packages
// -------------------------------------------------
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { reducer } from './reducers/reducer';

export const rootReducer = combineReducers({
  reducer,
});


export const store = createStore(rootReducer);
