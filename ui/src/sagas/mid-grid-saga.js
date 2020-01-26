/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import {
  put, delay, take, call,
} from 'redux-saga/effects';
import { ON_ELEVATOR_GRID_LOAD } from '../actions/elevator-grid-action';
import {
  ON_GO_BUTTON_CLICK,
  ON_REQUEST_ELEVATOR_SUCCESS,
} from '../actions/mid-grid-action';
import { PUBLISH_ACTIVITY_REPORT } from '../actions/info-grid-action';

import ApiClient from '../services/api-client';

const apiClient = ApiClient.create();
const groundFloorOffset = 1;

export function* onGoButtonClickSaga() {
  console.log('onGoButtonClickSaga');

  while (true) {
    const action = yield take(ON_GO_BUTTON_CLICK);
    const { fromFloor } = action;
    const { toFloor } = action;

    try {
      const result = yield call(requestElevator, fromFloor);
      console.log('saga result: ', result);

      const eId = result.data.id + groundFloorOffset;

      yield publishActivityReport('elevator requested');
      yield publishActivityReport(`E${eId} will be in use`);

      if (result.data.currentFloor !== fromFloor) {
        yield* processMoveElevator(fromFloor, eId);
      }

      yield put({ type: ON_REQUEST_ELEVATOR_SUCCESS, elevator: result.data });

      yield* processMoveElevator(toFloor, eId);

      yield publishActivityReport(`task done. E${eId} enters the ready state`);
    } catch (err) {
      console.error('err in saga: ', err);
      // yield put(loginFailure(err));
    }
  }
}

function* processMoveElevator(toFloor, eId) {
  yield call(moveElevator, eId - groundFloorOffset, toFloor);
  yield publishActivityReport(`E${eId} is moving to ${toFloor}`);
  yield delay(3000); // this is to simulate move of the elevator
  yield call(releaseElevator, eId - groundFloorOffset);
  yield publishActivityReport(`E${eId} arrived to ${toFloor}`);
  yield put({ type: ON_ELEVATOR_GRID_LOAD });
}

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
