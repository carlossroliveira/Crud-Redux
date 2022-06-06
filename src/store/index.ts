import { combineReducers, legacy_createStore as createStore } from 'redux';
import { reducer } from './reducers/reducer';

const rootReducer = combineReducers({
  reducer,
});

export type State = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
