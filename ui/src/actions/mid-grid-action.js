/**
 * Action types definitions
 */
export const ON_GO_BUTTON_CLICK = 'ON_GO_BUTTON_CLICK';
export const ON_REQUEST_ELEVATOR_SUCCESS = 'ON_REQUEST_ELEVATOR_SUCCESS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const ON_REQUEST_ELEVATOR_BUTTON_CLICK = 'ON_REQUEST_ELEVATOR_CLICK';
export const TOGGLE_FLOOR_SELECTOR_MODAL = 'TOGGLE_FLOOR_SELECTOR_MODAL';

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

export const onRequestElevatorButtonClickAction = () => ({
  type: ON_REQUEST_ELEVATOR_BUTTON_CLICK,
});

export const onToogleFloorSelectorModalAction = () => ({
  type: TOGGLE_FLOOR_SELECTOR_MODAL,
});
