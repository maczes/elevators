/* eslint-disable no-use-before-define */
import {
  onLoadElevatorsReducer,
} from '../../../src/js/reducers/elevator-grid-reducer';
import {
  onRequestElevatorListSuccessAction,
} from '../../../src/js/actions/elevator-grid-action';

describe(':spec:onPublishActivityReportReducer', () => {
  it('check reducer is OK for PUBLISH_ACTIVITY_REPORT action ', () => {
    // given
    const state = {
      tableData: [
        ['', 'x', ''],
        ['x', '', ''],
      ],
      rowTitle: ['F1', 'F2'],
      isLoading: true,
    };
    const elevators = createElevators();
    const expectedResult = [
      ['E1', '', '', '', '', '', '', 'X'],
      ['E2', '', '', '', '', '', '', 'X'],
      ['E3', '', '', '', '', '', '', 'X'],
      ['E4', '', '', '', '', '', '', 'X'],
    ];

    // when
    const newState = onLoadElevatorsReducer(state, onRequestElevatorListSuccessAction(elevators));

    // then
    expect(newState.tableData).toEqual(expectedResult);
  });
});


function createElevators() {
  return [{
    direction: 'NONE',
    addressedFloor: 0,
    id: 0,
    busy: false,
    currentFloor: 0,
  },
  {
    direction: 'NONE',
    addressedFloor: 0,
    id: 1,
    busy: false,
    currentFloor: 0,
  },
  {
    direction: 'NONE',
    addressedFloor: 0,
    id: 2,
    busy: false,
    currentFloor: 0,
  },
  {
    direction: 'NONE',
    addressedFloor: 0,
    id: 3,
    busy: false,
    currentFloor: 0,
  },
  ];
}
