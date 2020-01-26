/* eslint-disable import/prefer-default-export */
import {
  put, delay, take, call,
} from 'redux-saga/effects';
import ApiClient from '../services/api-client';

import {
  ON_ELEVATOR_GRID_LOAD,
  onRequestElevatorListSuccessAction,
} from '../actions/elevator-grid-action';

const apiClient = ApiClient.create();

function requestElevators() {
  console.log('onElevatorListLoadSaga::getElevators');

  return apiClient.getElevators();
}

export function* onElevatorListLoadSaga() {
  while (true) {
    yield take(ON_ELEVATOR_GRID_LOAD);

    try {
      const result = yield call(requestElevators);

      yield put(onRequestElevatorListSuccessAction(result.data));
      yield delay(2000);
    } catch (err) {
      console.error('err in saga: ', err);
    }
  }
}
