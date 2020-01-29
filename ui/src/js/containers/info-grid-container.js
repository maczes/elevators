import { connect } from 'react-redux';
import InfoGrid from '../components/info-grid';

import {
  onPublishActivityReportAction,
} from '../actions/info-grid-action';

const mapStateToProps = (state) => {
  const newState = {
    noticeBoard: state.onPublishActivityReportReducer.reports,
    refresh: state.onPublishActivityReportReducer.refresh,
  };
  console.info(`info-grid reducer state  : ${JSON.stringify(newState)}`);
  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  onPublishActivityReport: (report) => {
    dispatch(onPublishActivityReportAction(report));
  },
});

const InfoGridContainer = connect(mapStateToProps, mapDispatchToProps)(InfoGrid);

export default InfoGridContainer;
