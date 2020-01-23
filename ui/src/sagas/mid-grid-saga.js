import { put, takeEvery, delay, take, call } from 'redux-saga/effects'

import {
    ON_GO_BUTTON_CLICK,
    ON_REQUEST_ELEVATOR_SUCCESS,
} from "../actions/mid-grid-action";

import ApiClient from '../services/api-client';

const apiClient = ApiClient.create();

function requestElevator(floor) {
    console.log('onGoButtonClickSaga::requestElevator');

    return apiClient.requestElevator({ toFloor: floor });
}

export function* onGoButtonClickSaga() {
    console.log('onGoButtonClickSaga');

    while (true) {
        const action = yield take(ON_GO_BUTTON_CLICK);
        const toFloor = action.fromFloor;

        try {
            const result = yield call(requestElevator, toFloor);

            // const {
            //     direction,
            //     addressedFloor,
            //     id,
            //     busy,
            //     currentFloor
            // } = result;

            console.log("saga result: ", result);

            yield put({ type: ON_REQUEST_ELEVATOR_SUCCESS, elevator: result.data });
            yield delay(2000);
            //yield put(showMessage(msg));
        } catch (err) {
            console.error("err in saga: ", err);
            //yield put(loginFailure(err));
        }
    }
}