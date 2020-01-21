import React from 'react';
import Main from './src/components/main'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from './src/reducers';

let store = createStore(combinedReducers);

export default function app() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}