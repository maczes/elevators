import {
  put, delay, take, call,
} from 'redux-saga/effects';
import { ON_ELEVATOR_GRID_LOAD } from '../actions/elevator-grid-action';
import {
  ON_GO_BUTTON_CLICK,
  ON_REQUEST_ELEVATOR_SUCCESS,
  TOGGLE_FLOOR_SELECTOR_MODAL,
} from '../actions/mid-grid-action';
import { PUBLISH_ACTIVITY_REPORT } from '../actions/info-grid-action';

import ApiClient from '../services/api-client';

const apiClient = ApiClient.create();

function requestElevator(floor) {
  console.log('onGoButtonClickSaga::requestElevator');

  return apiClient.requestElevator({ toFloor: floor });
}

function moveElevator(elevatorId, toFloor) {
  console.log('onGoButtonClickSaga::moveElevator');

  return apiClient.moveElevator({ elevatorId, toFloor });
}

function releaseElevator(elevatorId) {
  console.log('onGoButtonClickSaga::releaseElevator');

  return apiClient.releaseElevator({ elevatorId });
}

function* publishActivityReport(report) {
  yield put({ type: PUBLISH_ACTIVITY_REPORT, report });
}

// eslint-disable-next-line import/prefer-default-export
export function* onGoButtonClickSaga() {
  console.log('onGoButtonClickSaga');

  while (true) {
    try {
      const action = yield take(ON_GO_BUTTON_CLICK);

      // yield put({ type: TOGGLE_FLOOR_SELECTOR_MODAL });

      const { fromFloor } = action;
      const { toFloor } = action;

      const result = yield call(requestElevator, fromFloor);
      console.log('saga result: ', result);

      yield publishActivityReport(`elevator requested, id:${result.data.id}`);

      yield put({ type: ON_REQUEST_ELEVATOR_SUCCESS, elevator: result.data });
      yield call(moveElevator, result.data.id, toFloor);
      yield publishActivityReport(`moving elevator, id:${result.data.id}`);

      yield delay(3000); // this is to simulate move of the elevator. Handle it somehow if required
      yield call(releaseElevator, result.data.id);
      yield publishActivityReport(`elevator arrived, id:${result.data.id}`);

      yield put({ type: ON_ELEVATOR_GRID_LOAD });
    } catch (err) {
      console.error('err in saga: ', err);
      // yield put(loginFailure(err));
    }
  }
}
