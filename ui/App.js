/* eslint-disable no-use-before-define */
import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import reduxCatch from 'redux-catch';

import createSagaMiddleware from 'redux-saga';

import combinedReducers from './src/js/reducers';
import combinedSagas from './src/js/sagas';
import Main from './src/js/components/main';

const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware, reduxCatch(errorHandler)];
const middleware = [sagaMiddleware];

const store = createStore(combinedReducers, applyMiddleware(...middleware));

sagaMiddleware.run(combinedSagas);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

// function errorHandler(error, getState, lastAction, dispatch) {
//   // dispatch ERROR action as you need.
//   console.log(`state after dispatch: ${getState()}, error: ${error}, lastAction: ${lastAction}, dispatch: ${dispatch}`);
// }
