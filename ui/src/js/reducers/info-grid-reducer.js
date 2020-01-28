/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { DateTime } from 'luxon';
import { PUBLISH_ACTIVITY_REPORT } from '../actions/info-grid-action';

export function onPublishActivityReportReducer(
  noticeBoard = {
    reports: [{ datestamp: '', report: '' }],
    refresh: false,
  },
  action,
) {
  switch (action.type) {
    case PUBLISH_ACTIVITY_REPORT: {
      console.log('PUBLISH_ACTIVITY_REPORT detected');
      const reportList = noticeBoard.reports;
      reportList.unshift({ datestamp: getDate(), report: action.report });
      const r = toggleRefresh(noticeBoard.refresh);

      return { reports: reportList, refresh: r };
    }
    default:
      return noticeBoard;
  }
}

let getDate = () => {
  const dt = DateTime.local();
  return dt.toFormat('HH:mm:ss.SSS');
};

const toggleRefresh = refresh => !refresh;
