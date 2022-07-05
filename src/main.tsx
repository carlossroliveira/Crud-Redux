import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store, persister } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
