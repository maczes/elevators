import {
  onPublishActivityReportAction,
  PUBLISH_ACTIVITY_REPORT,
} from '../../../src/js/actions/info-grid-action';

describe(':spec:info-grid-action', () => {
  it('check onPublishActivityReportAction is initialized correctly', () => {
    // Given
    const report = 'test report';

    // When
    const action = onPublishActivityReportAction(report);

    // Then
    expect(action.type).toBe(PUBLISH_ACTIVITY_REPORT);
    expect(action.report).toBe(report);
  });
});
