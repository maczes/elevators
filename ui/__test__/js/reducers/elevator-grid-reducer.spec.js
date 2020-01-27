/* eslint-disable no-use-before-define */
import {
  onLoadElevatorsReducer,
} from '../../../src/js/reducers/elevator-grid-reducer';
import {
  onRequestElevatorListSuccessAction,
} from '../../../src/js/actions/elevator-grid-action';

describe(':spec:onPublishActivityReportReducer', () => {
  it('check reducer is OK for PUBLISH_ACTIVITY_REPORT action ', () => {
    // given

    const state = {
      tableData: [
        ['', 'x', ''],
        ['x', '', ''],
      ],
      rowTitle: ['F1', 'F2'],
      isLoading: true,
    };
    // when
    const newState = onLoadElevatorsReducer(state, onRequestElevatorListSuccessAction());

    // then
    expect(newState).toEqual(state);
  });
});
