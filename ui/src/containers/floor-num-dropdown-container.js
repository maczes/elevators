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
    data: state.floorNumDropdownDataReducer ? state.floorNumDropdownDataReducer : [['?'], ['?']],
  };

  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  loadDropdownData: () => {
    dispatch(loadDropdownDataAction());
  },
  onFromFloorClick: (request = { fromFloor, toFloor }) => {
    dispatch(getInitialFloorAction(request));
  },
  onToFloorClick: (request = { fromFloor, toFloor }) => {
    dispatch(getTargetFloorAction(request));
  },
  resetComponent: () => {
    dispatch(resetComponentAction());
  },
});

const FloorNumDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default FloorNumDropdownContainer;
