/* eslint-disable no-use-before-define */
import { DateTime } from 'luxon';
import { onPublishActivityReportReducer } from '../../src/reducers/info-grid-reducer';
import {
  PUBLISH_ACTIVITY_REPORT,
} from '../../src/actions/info-grid-action';

describe(':spec:onPublishActivityReportReducer', () => {
  it('check reducer is OK for PUBLISH_ACTIVITY_REPORT action ', () => {
    // given
    const testReport = 'this is my brand new test report';
    const state = {
      reports: [{ datestamp: getDate(), report: 'initial report' }],
      refresh: false,
    };

    // when
    const newState = onPublishActivityReportReducer(state, {
      type: PUBLISH_ACTIVITY_REPORT, report: testReport,
    });

    // then
    expect(newState.reports.length).toEqual(2);
    expect(newState.reports[0].report).toEqual(testReport); // 0 since we add to the front of the list
    expect(newState.refresh).toEqual(!state.refresh);
  });
});

let getDate = () => {
  const dt = DateTime.local();
  return dt.toFormat('HH:mm:ss.SSS');
};
