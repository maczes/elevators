import { connect } from 'react-redux';
import ElevatorGrid from '../components/elevator-grid';

import {
  onElevatorGridLoadAction,
} from '../actions/elevator-grid-action';

const mapStateToProps = (state) => {
  const newState = {
    tableData: state.onLoadElevatorsReducer.tableData,
    rowTitle: state.onLoadElevatorsReducer.rowTitle,
    isLoading: state.onLoadElevatorsReducer.isLoading,
  };

  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  onElevatorGridLoad: () => {
    dispatch(onElevatorGridLoadAction());
  },
});

const ElevatorGridContainer = connect(mapStateToProps, mapDispatchToProps)(ElevatorGrid);

export default ElevatorGridContainer;
