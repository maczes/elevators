import { all } from 'redux-saga/effects';

import { onGoButtonClickSaga } from './mid-grid-saga';
import { onElevatorListLoadSaga } from './elevator-grid-saga';

export default function* combinedSagas() {
    yield all([
        onGoButtonClickSaga(),
        onElevatorListLoadSaga()
    ]);
}