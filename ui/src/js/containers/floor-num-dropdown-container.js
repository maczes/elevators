import { connect } from 'react-redux';
import Dropdown from '../components/floor-num-dropdown';

import {
  loadDropdownDataAction,
  getInitialFloorAction,
  getTargetFloorAction,
  resetComponentAction,
} from '../actions/floor-num-dropdown-action';

const mapStateToProps = (state) => {
  const newState = {
    request: state.floorNumDropdownReducer,
    data: state.floorNumDropdownDataReducer ? state.floorNumDropdownDataReducer : [[-1], [-1]],
  };

  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  loadDropdownData: () => {
    dispatch(loadDropdownDataAction());
  },
  onFromFloorClick: (moveRequest) => {
    dispatch(getInitialFloorAction(moveRequest));
  },
  onToFloorClick: (moveRequest) => {
    dispatch(getTargetFloorAction(moveRequest));
  },
  resetComponent: () => {
    dispatch(resetComponentAction());
  },
});

const FloorNumDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default FloorNumDropdownContainer;
