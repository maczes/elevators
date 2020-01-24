/**
 * Action types definitions 
 */
export const ON_ELEVATOR_GRID_LOAD = 'ON_ELEVATOR_GRID_LOAD';
export const ON_REQUEST_ELEVATOR_LIST_SUCCESS = 'ON_REQUEST_ELEVATOR_LIST_SUCCESS';

/**
 * Action definitions
 */
export const onElevatorGridLoadAction = () => {
    return {
        type: ON_ELEVATOR_GRID_LOAD,
    }
}

export const onRequestElevatorListSuccessAction = (elevators) => {
    return {
        type: ON_REQUEST_ELEVATOR_LIST_SUCCESS,
        elevators: elevators,
    }
}

