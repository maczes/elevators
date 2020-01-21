export const ON_INITIAL_FLOOR_HIT = 'ON_INITIAL_FLOOR_HIT';
export const ON_TARGET_FLOOR_HIT = 'ON_TARGET_FLOOR_HIT';
export const LOAD_DROPDOWN_DATA = 'LOAD_DROPDOWN_DATA';

export const getInitialFloorAction = (floor) => {
    return {
        type: ON_INITIAL_FLOOR_HIT,
        floor: floor,
    }
}

export const getTargetFloorAction = (floor) => {
    return {
        type: ON_TARGET_FLOOR_HIT,
        floor: floor,
    }
}

export const loadDropdownDataAction = () => {
    return {
        type: LOAD_DROPDOWN_DATA,
        data: [[], []],
    }
}