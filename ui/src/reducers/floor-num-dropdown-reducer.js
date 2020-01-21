import { ON_INITIAL_FLOOR_HIT, ON_TARGET_FLOOR_HIT, LOAD_DROPDOWN_DATA } from "../actions/floor-num-dropdown-action";

export function floorNumDropdownReducer(floor = 0, action) {
    switch (action.type) {
        case ON_INITIAL_FLOOR_HIT:
            return action.floor;
        case ON_TARGET_FLOOR_HIT:
            return action.floor;
        default:
            return floor;
    }
}

export function floorNumDropdownDataReducer(data = [[], []], action) {
    switch (action.type) {
        case LOAD_DROPDOWN_DATA:
            const dropdownData = [["0", "1", "2", "3", "4", "5"], ["0", "1", "2", "3", "4", "5"]];
            console.log("returning dropdown data: ", dropdownData)
            return dropdownData;
        default:
            return data;
    }
}

// export default function floorNumDropdownReducer(floors = { fromFloor: 0, toFloor: 0 }, action) {
//     switch (action.type) {
//         case ON_INITIAL_FLOOR_HIT:
//             floors.fromFloor = action.floor;
//             return floors;
//         case ON_TARGET_FLOOR_HIT:
//             floors.toFloor = action.floor;
//             return floors;
//         default:
//             return floors;
//     }
// }
