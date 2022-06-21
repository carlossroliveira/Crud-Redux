// -------------------------------------------------
// Packages
// -------------------------------------------------
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducers/reducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
