/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import {
  put, delay, take, call, cancelled, cancel,
} from 'redux-saga/effects';
import { onElevatorGridLoadAction } from '../actions/elevator-grid-action';
import {
  ON_GO_BUTTON_CLICK,
  onRequestElevatorSuccessAction,
} from '../actions/mid-grid-action';
import { onPublishActivityReportAction } from '../actions/info-grid-action';
import { onFailureAction } from '../actions/error-handler-action';
import ApiClient from '../services/api-client';

const apiClient = ApiClient.create();
const groundFloorOffset = 1;

export function* onGoButtonClickSaga() {
  console.log('onGoButtonClickSaga');

  while (true) {
    const action = yield take(ON_GO_BUTTON_CLICK);
    const { fromFloor } = action;
    const { toFloor } = action;

    if (fromFloor === toFloor) {
      yield* publishActivityReport('no action needed, same floors selected');
      break; // TODO: this will breake saga for good. Fire out something else
    }

    try {
      const result = yield call(requestElevator, fromFloor);
      const eId = result.data.id + groundFloorOffset;

      yield* publishActivityReport('elevator requested. Nearest shaft is calculated');
      yield delay(1500); // note: with * this looks to run in the background
      yield* publishActivityReport(`E${eId} will be in use`);

      if (result.data.currentFloor !== fromFloor) {
        yield* processMoveElevator(fromFloor, eId);
      }

      yield put(onRequestElevatorSuccessAction(result.data));

      yield* processMoveElevator(toFloor, eId);
      yield* publishActivityReport(`task done. E${eId} enters the ready state`);
    } catch (error) {
      console.error('err:mid-grid-saga ', error);
      yield put(onFailureAction('err:mid-grid-saga'));
    }
  }
}

function* processMoveElevator(toFloor, eId) {
  yield call(moveElevator, eId - groundFloorOffset, toFloor);
  yield publishActivityReport(`E${eId} is moving to ${toFloor}`);
  yield delay(3000); // this is to simulate move of the elevator
  yield call(releaseElevator, eId - groundFloorOffset);
  yield put(onElevatorGridLoadAction());
  yield publishActivityReport(`E${eId} arrived to ${toFloor}`);
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
  yield put(onPublishActivityReportAction(report));
  yield delay(1000);
}
