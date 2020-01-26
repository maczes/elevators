/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { DateTime } from 'luxon';
import {
  PUBLISH_ACTIVITY_REPORT,
} from '../actions/info-grid-action';

export function onPublishActivityReportReducer(noticeBoard = {
  reports: [{ datestamp: getDate(), report: 'elevators ready' }],
}, action) {
  switch (action.type) {
    case PUBLISH_ACTIVITY_REPORT:
      console.log('PUBLISH_ACTIVITY_REPORT detected');
      noticeBoard.reports.push({ datestamp: getDate(), report: action.report });
      return noticeBoard;
    default:
      return noticeBoard;
  }
}

let getDate = () => {
  const dt = DateTime.local();
  return dt.toFormat('HH:mm:ss.SSS');
};
