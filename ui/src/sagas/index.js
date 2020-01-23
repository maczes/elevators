import { all } from 'redux-saga/effects';

import { onGoButtonClickSaga } from './mid-grid-saga';

export default function* combinedSagas() {
    yield all([
        onGoButtonClickSaga(),
    ]);
}