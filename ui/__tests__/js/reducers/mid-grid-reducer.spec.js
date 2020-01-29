/* eslint-disable no-use-before-define */
import { onGoButtonClickReducer } from '../../../src/js/reducers/mid-grid-reducer';
import { onRequestElevatorSuccessAction } from '../../../src/js/actions/mid-grid-action';

describe(':spec:onGoButtonClickReducer', () => {
  it('check reducer is OK for ON_REQUEST_ELEVATOR_SUCCESS action ', () => {
    // given
    const initialState = {
      direction: 'NONE',
      addressedFloor: 0,
      id: 0,
      busy: false,
      currentFloor: 0,
    };
    const elevator = {
      direction: 'UP',
      addressedFloor: 3,
      id: 0,
      busy: true,
      currentFloor: 4,
    };

    // when
    const newState = onGoButtonClickReducer(
      initialState,
      onRequestElevatorSuccessAction(elevator),
    );

    // then
    expect(newState).toBeDefined();
    expect(newState).toEqual(elevator);
  });

  it('check reducer returns default values on undefined action ', () => {
    // given
    const initialState = {
      direction: 'NONE',
      addressedFloor: 0,
      id: 0,
      busy: false,
      currentFloor: 0,
    };

    // when
    const newState = onGoButtonClickReducer(initialState, {
      type: 'SOME_UNDEFINED_ACTION',
    });

    // then
    expect(newState).toBeDefined();
    expect(newState).toEqual(initialState);
  });
  // elow will go to saga test
  // it('check reducer is OK for ON_REQUEST_ELEVATOR_SUCCESS action ', () => {
  //   // given
  //   const initialState = {
  //     fromFloor: 0,
  //     toFloor: 0,
  //   };
  //   const actionPayload = {
  //     fromFloor: 2,
  //     toFloor: 4,
  //   };

  //   // when
  //   const newState = onGoButtonClickReducer(
  //     initialState,
  //     onGoButtonClickAction(actionPayload),
  //   );

  //   // then
  //   expect(newState).toBeDefined();
  //   expect(newState).toEqual(actionPayload);
  // });
});
