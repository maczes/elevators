/* eslint-disable no-use-before-define */
// import { toBeArrayOfNumbersMatcher } from 'expect-more-jest';
import {
  floorNumDropdownReducer,
  floorNumDropdownDataReducer,
} from '../../../src/js/reducers/floor-num-dropdown-reducer';
import {
  getInitialFloorAction,
  getTargetFloorAction,
  resetComponentAction,
  loadDropdownDataAction,
} from '../../../src/js/actions/floor-num-dropdown-action';

describe(':spec:floorNumDropdownReducer', () => {
  it('should update initial floor accordingly to selection', () => {
    // given
    const initialState = { fromFloor: 0, toFloor: 0 };
    const newRequest = { fromFloor: 3, toFloor: 6 };

    // when
    const newState = floorNumDropdownReducer(
      initialState,
      getInitialFloorAction(newRequest),
    );

    // then
    expect(newState.fromFloor).toEqual(3);
    expect(newState.toFloor).toEqual(0);
  });

  it('should update target floor accordingly to selection', () => {
    // given
    const initialState = { fromFloor: 0, toFloor: 0 };
    const newRequest = { fromFloor: 3, toFloor: 6 };

    // when
    const newState = floorNumDropdownReducer(
      initialState,
      getTargetFloorAction(newRequest),
    );

    // then
    expect(newState.fromFloor).toEqual(0);
    expect(newState.toFloor).toEqual(6);
  });

  it('should reset selection properly', () => {
    // given
    const initialState = { fromFloor: 3, toFloor: 4 };

    // when
    const newState = floorNumDropdownReducer(
      initialState,
      resetComponentAction(),
    );

    // then
    expect(newState.fromFloor).toEqual(0);
    expect(newState.toFloor).toEqual(0);
  });
});

describe(':spec:floorNumDropdownDataReducer', () => {
  it('should initialize dropdow selection list properly', () => {
    // given
    const initialState = [[-1], [-1]];

    // when
    const newState = floorNumDropdownDataReducer(
      initialState,
      loadDropdownDataAction(),
    );

    // then
    expect(newState.length).toEqual(2);
    expect(newState[0]).toBeArrayOfNumbers();
    expect(newState[1]).toBeArrayOfNumbers();
  });
});
