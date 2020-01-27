/**
 * Action types definitions
 */
export const PUBLISH_ACTIVITY_REPORT = 'PUBLISH_ACTIVITY_REPORT';

/**
 * Action definitions
 */
export const onPublishActivityReportAction = (report) => ({
  type: PUBLISH_ACTIVITY_REPORT,
  report,
});
