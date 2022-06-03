import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);