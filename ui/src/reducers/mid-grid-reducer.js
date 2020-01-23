import {
    ON_GO_BUTTON_CLICK,
    ON_REQUEST_ELEVATOR_SUCCESS,
} from "../actions/mid-grid-action";
import { ActionSheetIOS } from "react-native";

export function onGoButtonClickReducer(elevator = {
    direction: "NONE",
    addressedFloor: 0,
    id: 0,
    busy: false,
    currentFloor: 0,
}, action) {
    switch (action.type) {
        case ON_GO_BUTTON_CLICK:
            console.log("ON_GO_BUTTON_CLICK detected");

            return elevator;
        case ON_REQUEST_ELEVATOR_SUCCESS:
            console.log("ON_REQUEST_ELEVATOR_SUCCESS detected");
            return action.elevator;
        default:
            return elevator;
    }
}
