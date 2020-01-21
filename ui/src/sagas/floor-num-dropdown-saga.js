import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export default function* floorNumDropdownSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
