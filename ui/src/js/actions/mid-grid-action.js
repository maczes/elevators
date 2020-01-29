/**
 * Action types definitions
 */
export const ON_GO_BUTTON_CLICK = 'ON_GO_BUTTON_CLICK';
export const ON_REQUEST_ELEVATOR_SUCCESS = 'ON_REQUEST_ELEVATOR_SUCCESS';
export const ON_REQUEST_ELEVATOR_FAILURE = 'ON_REQUEST_ELEVATOR_FAILURE';

/**
 * Action definitions
 */
export const onGoButtonClickAction = (fromFloor, toFloor) => ({
  type: ON_GO_BUTTON_CLICK,
  fromFloor,
  toFloor,
});

export const onRequestElevatorSuccessAction = (elevator) => ({
  type: ON_REQUEST_ELEVATOR_SUCCESS,
  elevator,
});
