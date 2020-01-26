/* eslint-disable no-use-before-define */
import {
  ON_INITIAL_FLOOR_SELECT,
  ON_TARGET_FLOOR_SELECT,
  LOAD_DROPDOWN_DATA,
  ON_FLOOR_NUM_DROPDOWN_RESET,
} from '../actions/floor-num-dropdown-action';
import AppConfig from '../config/app-config';

export function floorNumDropdownDataReducer(data = [[-1], [-1]], action) {
  switch (action.type) {
    case LOAD_DROPDOWN_DATA:
      return getDropdownContent();
    default:
      return data;
  }
}

export function floorNumDropdownReducer(request = { fromFloor: 0, toFloor: 0 }, action) {
  switch (action.type) {
    case ON_INITIAL_FLOOR_SELECT:
      return {
        fromFloor: action.request.fromFloor,
        toFloor: request.toFloor,
      };
    case ON_TARGET_FLOOR_SELECT:
      return {
        fromFloor: request.fromFloor,
        toFloor: action.request.toFloor,
      };
    case ON_FLOOR_NUM_DROPDOWN_RESET:
      return {
        fromFloor: 0,
        toFloor: 0,
      };
    default:
      return request;
  }
}

const GROUND_FLOOR_OFFSET = 1;
const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + GROUND_FLOOR_OFFSET;

const getDropdownContent = () => [
  Array.from(Array(FIXED_NUMBER_OF_FLOORS), (_d, i) => i),
  Array.from(Array(FIXED_NUMBER_OF_FLOORS), (_d, i) => i),
];
