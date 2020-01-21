import { ON_INITIAL_FLOOR_HIT, ON_TARGET_FLOOR_HIT } from "../actions/floor-num-dropdown-action";

export default function floorNumDropdownReducer(floor = 0, action) {
    switch (action.type) {
        case ON_INITIAL_FLOOR_HIT:
            return action.floor;
        case ON_TARGET_FLOOR_HIT:
            return action.floor;
        default:
            return floor;
    }
}
