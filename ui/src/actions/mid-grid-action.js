/**
 * Action types definitions 
 */
export const ON_GO_BUTTON_CLICK = 'ON_GO_BUTTON_CLICK';
export const ON_REQUEST_ELEVATOR_SUCCESS = 'ON_REQUEST_ELEVATOR_SUCCESS';

/**
 * Action definitions
 */
export const onGoButtonClickAction = (fromFloor, toFloor) => {
    return {
        type: ON_GO_BUTTON_CLICK,
        fromFloor: fromFloor,
        toFloor: toFloor,
    }
}

export const onRequestElevatorSuccessAction = (elevator) => {
    return {
        type: ON_REQUEST_ELEVATOR_SUCCESS,
        elevator: elevator,
    }
}

