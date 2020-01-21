/**
 * Action types definitions 
 */
export const LOAD_DROPDOWN_DATA = 'LOAD_DROPDOWN_DATA';
export const ON_INITIAL_FLOOR_SELECT = 'ON_INITIAL_FLOOR_SELECT';
export const ON_TARGET_FLOOR_SELECT = 'ON_TARGET_FLOOR_SELECT';
export const ON_FLOOR_NUM_DROPDOWN_RESET = 'ON_FLOOR_NUM_DROPDOWN_RESET';

/**
 * Action definitions
 */
export const getInitialFloorAction = (request = { fromFloor, toFloor }) => {
    return {
        type: ON_INITIAL_FLOOR_SELECT,
        request: request,
    }
}

export const getTargetFloorAction = (request = { fromFloor, toFloor }) => {
    return {
        type: ON_TARGET_FLOOR_SELECT,
        request: request,
    }
}

export const loadDropdownDataAction = () => {
    return {
        type: LOAD_DROPDOWN_DATA,
        data: [[], []],
    }
}

export const resetComponentAction = () => {
    return {
        type: ON_FLOOR_NUM_DROPDOWN_RESET,
    }
}

