/* eslint-disable import/prefer-default-export */
import {
  put, take, call,
} from 'redux-saga/effects';
import ApiClient from '../services/api-client';
import {
  ON_ELEVATOR_GRID_LOAD,
  onRequestElevatorListSuccessAction,
} from '../actions/elevator-grid-action';
import { onFailureAction } from '../actions/error-handler-action';
// import { onPublishActivityReportAction } from '../actions/info-grid-action';

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

      if (result.problem) {
        yield put(onFailureAction(result.problem));
        break;
      }

      yield put(onRequestElevatorListSuccessAction(result.data));
      // yield put(onPublishActivityReportAction('Elevators are ready'));
    } catch (error) {
      console.log('err:elevator-grid-saga ', error);
      yield put(onFailureAction('Im sorry try again'));
    }
  }
}
