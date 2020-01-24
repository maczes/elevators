import { put, delay, take, call } from 'redux-saga/effects';
import { ON_ELEVATOR_GRID_LOAD } from '../actions/elevator-grid-action';
import {
    ON_GO_BUTTON_CLICK,
    ON_REQUEST_ELEVATOR_SUCCESS,
} from '../actions/mid-grid-action';
import { PUBLISH_ACTIVITY_REPORT } from '../actions/info-grid-action';

import ApiClient from '../services/api-client';

const apiClient = ApiClient.create();

export function* onGoButtonClickSaga() {
    console.log('onGoButtonClickSaga');

    while (true) {
        const action = yield take(ON_GO_BUTTON_CLICK);
        const fromFloor = action.fromFloor;
        const toFloor = action.toFloor;

        try {
            const result = yield call(requestElevator, fromFloor);
            console.log("saga result: ", result);

            publishActivityReport("elevator requested, id:" + result.data.id);

            yield put({ type: ON_REQUEST_ELEVATOR_SUCCESS, elevator: result.data });
            yield call(moveElevator, result.data.id, toFloor);
            publishActivityReport("moving elevator, id:" + result.data.id);

            yield delay(3000); //this is to simulate move of the elevator. Handle it somehow if required
            yield call(releaseElevator, result.data.id);
            publishActivityReport("elevator arrived, id:" + result.data.id);

            yield put({ type: ON_ELEVATOR_GRID_LOAD });

            //yield put(showMessage(msg));
        } catch (err) {
            console.error("err in saga: ", err);
            //yield put(loginFailure(err));
        }
    }
}

function requestElevator(floor) {
    console.log('onGoButtonClickSaga::requestElevator');

    return apiClient.requestElevator({ toFloor: floor });
}

function moveElevator(elevatorId, toFloor) {
    console.log('onGoButtonClickSaga::moveElevator');

    return apiClient.moveElevator({ elevatorId: elevatorId, toFloor: toFloor });
}

function releaseElevator(elevatorId) {
    console.log('onGoButtonClickSaga::releaseElevator');

    return apiClient.releaseElevator({ elevatorId: elevatorId });
}

function* publishActivityReport(report) {
    yield put({ type: PUBLISH_ACTIVITY_REPORT, report: report });
}

