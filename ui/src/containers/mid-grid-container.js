import { connect } from 'react-redux';
import MidGrid from '../components/mid-grid';

import {
  onGoButtonClickAction,
  onRequestElevatorButtonClickAction,
  onToogleFloorSelectorModalAction,
} from '../actions/mid-grid-action';

const mapStateToProps = (state) => {
  const newState = {
    fromFloor: state.floorNumDropdownReducer.fromFloor,
    toFloor: state.floorNumDropdownReducer.toFloor,
    isModalVisible: state.onRequestElevatorButtonClickReducer.isModalVisible,
  };
  console.info(`mid-grid reducer state  : ${JSON.stringify(newState)}`);
  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  onGoButtonClick: (fromFloor, toFloor) => {
    dispatch(onGoButtonClickAction(fromFloor, toFloor));
    // above action is going to be catched by saga
  },
  onRequestElevatorButtonClick: () => {
    dispatch(onRequestElevatorButtonClickAction());
  },
  onToogleModal: () => {
    dispatch(onToogleFloorSelectorModalAction());
  },
});

const MidGridContainer = connect(mapStateToProps, mapDispatchToProps)(MidGrid);

export default MidGridContainer;
