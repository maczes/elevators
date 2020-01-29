/* eslint-disable no-use-before-define */
import { DateTime } from 'luxon';
import { onPublishActivityReportReducer } from '../../../src/js/reducers/info-grid-reducer';
import { onPublishActivityReportAction } from '../../../src/js/actions/info-grid-action';

describe(':spec:onPublishActivityReportReducer', () => {
  it('check reducer is OK for PUBLISH_ACTIVITY_REPORT action ', () => {
    // given
    const testReport = 'this is my brand new test report';
    const expectedTestReportId = 0; // 0 since we add to the front of the list
    const state = {
      reports: [
        {
          datestamp: getDate(),
          report: 'initial report',
        },
      ],
      refresh: false,
    };

    // when
    const newState = onPublishActivityReportReducer(
      state,
      onPublishActivityReportAction(testReport),
    );

    // then
    expect(newState).toBeDefined();
    expect(newState.reports.length).toEqual(2);
    expect(newState.reports[expectedTestReportId].report).toEqual(testReport);
    expect(newState.reports[expectedTestReportId].datestamp).toBeDefined();
    expect(newState.refresh).toEqual(!state.refresh);
  });
});

let getDate = () => {
  const dt = DateTime.local();
  return dt.toFormat('HH:mm:ss.SSS');
};
