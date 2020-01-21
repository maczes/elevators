import {
    ON_INITIAL_FLOOR_SELECT,
    ON_TARGET_FLOOR_SELECT,
    LOAD_DROPDOWN_DATA,
    ON_FLOOR_NUM_DROPDOWN_RESET,
} from "../actions/floor-num-dropdown-action";
import AppConfig from '../config/app-config';

export function floorNumDropdownDataReducer(data = [["0"], ["0"]], action) {
    switch (action.type) {
        case LOAD_DROPDOWN_DATA:
            const GROUND_FLOOR_OFFSET = 1;
            const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + GROUND_FLOOR_OFFSET;
            const dropdownData = [
                Array.from(Array(FIXED_NUMBER_OF_FLOORS), (d, i) => i),
                Array.from(Array(FIXED_NUMBER_OF_FLOORS), (d, i) => i)
            ];
            console.log("returning dropdown data: ", dropdownData);

            return dropdownData;
        default:
            return data;
    }
}

export function floorNumDropdownReducer(request = { fromFloor: 0, toFloor: 0 }, action) {
    switch (action.type) {
        case ON_INITIAL_FLOOR_SELECT:
            return request = {
                fromFloor: action.request.fromFloor,
                toFloor: request.toFloor,
            };
        case ON_TARGET_FLOOR_SELECT:
            return request = {
                fromFloor: request.fromFloor,
                toFloor: action.request.toFloor,
            };
        case ON_FLOOR_NUM_DROPDOWN_RESET:
            return request = {
                fromFloor: 0,
                toFloor: 0,
            };
        default:
            return request;
    }
}
