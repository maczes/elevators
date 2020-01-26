import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './src/reducers';
import combinedSagas from './src/sagas';
import Main from './src/components/main';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(combinedSagas);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
