import {
  ON_REQUEST_ELEVATOR_SUCCESS,
  ON_REQUEST_ELEVATOR_BUTTON_CLICK,
  TOGGLE_FLOOR_SELECTOR_MODAL,
} from '../actions/mid-grid-action';

export default function onRequestElevatorButtonClickReducer(state = {
  fromFloor: 0,
  toFloor: 0,
  isModalVisible: false,
}, action) {
  switch (action.type) {
    case ON_REQUEST_ELEVATOR_SUCCESS:
      console.log('ON_REQUEST_ELEVATOR_SUCCESS detected');
      // return {
      //   fromFloor: state.fromFloor,
      //   toFloor: state.toFloor,
      //   isModalVisible: !state.isModalVisible,
      // };
      return state;
    case ON_REQUEST_ELEVATOR_BUTTON_CLICK:
      return {
        fromFloor: state.fromFloor,
        toFloor: state.toFloor,
        isModalVisible: !state.isModalVisible,
      };
    case TOGGLE_FLOOR_SELECTOR_MODAL:
      console.log('TOGGLE_FLOOR_SELECTOR_MODAL detected');
      return {
        fromFloor: state.fromFloor,
        toFloor: state.toFloor,
        isModalVisible: !state.isModalVisible,
      };
    default:
      return state;
  }
}

// export function onGoButtonClickReducer(state = {
//   fromFloor: 0,
//   toFloor: 0,
//   isModalVisible: false,
// }, action) {
//   switch (action.type) {
//     case TOGGLE_FLOOR_SELECTOR_MODAL:
//       console.log('TOGGLE_FLOOR_SELECTOR_MODAL detected');
//       return {
//         fromFloor: state.fromFloor,
//         toFloor: state.toFloor,
//         isModalVisible: !state.isModalVisible,
//       };
//     default:
//       return state;
//   }
// }
