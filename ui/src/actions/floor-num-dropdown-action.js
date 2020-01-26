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
export const getInitialFloorAction = (fromFloor, toFloor) => ({
  type: ON_INITIAL_FLOOR_SELECT,
  request: { fromFloor, toFloor },
});

export const getTargetFloorAction = (fromFloor, toFloor) => ({
  type: ON_TARGET_FLOOR_SELECT,
  request: { fromFloor, toFloor },
});

export const loadDropdownDataAction = () => ({
  type: LOAD_DROPDOWN_DATA,
  data: [[], []],
});

export const resetComponentAction = () => ({
  type: ON_FLOOR_NUM_DROPDOWN_RESET,
});

// attempt to use react-actions
// export const getInitialFloorAction = createAction(
//   'ON_INITIAL_FLOOR_SELECT',
//   (request) => ({ fromFloor: request.fromFloor, toFloor: request.toFloor }),
// );

// export const getTargetFloorAction = createAction(
//   'ON_TARGET_FLOOR_SELECT',
//   (request) => ({ fromFloor: request.fromFloor, toFloor: request.toFloor }),
// );
