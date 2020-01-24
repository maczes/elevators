import {
    PUBLISH_ACTIVITY_REPORT,
} from "../actions/info-grid-action";

export function onPublishActivityReportReducer(noticeBoard = { reports: ["All elevators ready"] }, action) {
    switch (action.type) {
        case PUBLISH_ACTIVITY_REPORT:
            console.log("PUBLISH_ACTIVITY_REPORT detected");
            noticeBoard.reports.push(action.report);
            return noticeBoard;
        default:
            return noticeBoard;
    }
}