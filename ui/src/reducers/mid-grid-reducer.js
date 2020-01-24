import {
    ON_REQUEST_ELEVATOR_SUCCESS,
} from "../actions/mid-grid-action";

export function onGoButtonClickReducer(elevator = {
    direction: "NONE",
    addressedFloor: 0,
    id: 0,
    busy: false,
    currentFloor: 0,
}, action) {
    switch (action.type) {
        case ON_REQUEST_ELEVATOR_SUCCESS:
            console.log("ON_REQUEST_ELEVATOR_SUCCESS detected");
            return action.elevator;
        default:
            return elevator;
    }
}