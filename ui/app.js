import React from 'react';
import Main from './src/components/main'

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './src/reducers';

//Redux Saga
import createSagaMiddleware from 'redux-saga';
import combinedSagas from './src/sagas';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(combinedSagas);

export default function app() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}