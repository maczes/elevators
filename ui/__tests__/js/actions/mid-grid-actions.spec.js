import {
  onRequestElevatorSuccessAction,
  ON_REQUEST_ELEVATOR_SUCCESS,
} from '../../../src/js/actions/mid-grid-action';

describe(':spec:mid-grid-action', () => {
  it('check onRequestElevatorSuccessAction is initialized correctly', () => {
    // Given
    const elevator = {
      direction: 'UP',
      addressedFloor: 3,
      id: 0,
      busy: true,
      currentFloor: 4,
    };

    // When
    const action = onRequestElevatorSuccessAction(elevator);

    // Then
    expect(action.type).toBe(ON_REQUEST_ELEVATOR_SUCCESS);
    expect(action.elevator).toBe(elevator);
  });
});
