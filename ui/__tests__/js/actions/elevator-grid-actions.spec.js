import {
  onElevatorGridLoadAction,
  onRequestElevatorListSuccessAction,
  ON_ELEVATOR_GRID_LOAD,
  ON_REQUEST_ELEVATOR_LIST_SUCCESS,
} from '../../../src/js/actions/elevator-grid-action';

describe(':spec:elevator-grid-action', () => {
  it('check onRequestElevatorListSuccessAction is initialized correctly', () => {
    // Given
    const elevator = {
      direction: 'UP',
      addressedFloor: 3,
      id: 0,
      busy: true,
      currentFloor: 4,
    };

    // When
    const action = onRequestElevatorListSuccessAction([elevator]);

    // Then
    expect(action.type).toBe(ON_REQUEST_ELEVATOR_LIST_SUCCESS);
    expect(action.elevators).toContain(elevator);
  });

  it('check onElevatorGridLoadAction is initialized correctly', () => {
    // Given
    const expectedType = ON_ELEVATOR_GRID_LOAD;

    // When
    const action = onElevatorGridLoadAction();

    // Then
    expect(action.type).toBe(expectedType);
  });
});
