/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import {
  ON_REQUEST_ELEVATOR_LIST_SUCCESS,
} from '../actions/elevator-grid-action';
import AppConfig from '../config/app-config';

const ELEVATOR_FIX_NUMBER = 1;

export function onLoadElevatorsReducer(state = {
  tableData: [], rowTitle: [], isLoading: true,
}, action) {
  switch (action.type) {
    case ON_REQUEST_ELEVATOR_LIST_SUCCESS: {
      console.log('ON_REQUEST_ELEVATOR_LIST_SUCCESS detected in elevator-grid-reducer');

      const tableData = processElevators(action.elevators);
      console.log('result:', tableData);

      return { tableData, rowTitle: buildRowTitle().reverse(), isLoading: false };
    }
    default:
      return state;
  }
}

const buildRowTitle = () => {
  const rowTitleArr = [];

  for (let i = 0; i <= AppConfig.NUMBER_OF_FLOORS; i += 1) {
    rowTitleArr[i] = i.toString();
  }

  return rowTitleArr;
};

const processElevators = (elevatorList) => {
  const FLOOR_NUMBER_OFFSET = 2; // one row for header, and one for ground floor (level 0)
  const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + FLOOR_NUMBER_OFFSET;

  const elevators = elevatorList.map((c) => ({
    id: c.id,
    currentFloor: c.currentFloor,
  }));

  return [Array(AppConfig.NUMBER_OF_ELEVATORS).keys()]
    .map((it) => buildRows(it, FIXED_NUMBER_OF_FLOORS, elevators))[0];
};

function buildRows(iterator, numberOfFloors, elevators) {
  const rows = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key of iterator) {
    const elevatorsFoundOnTheFloor = elevators.filter((obj) => obj.id === key);

    if (elevatorsFoundOnTheFloor) {
      rows[key] = buildElevatorRow(`E${key + ELEVATOR_FIX_NUMBER}`, numberOfFloors, elevatorsFoundOnTheFloor);
    } else {
      rows[key] = buildRow(`F${key}`, numberOfFloors);
    }
  }
  return rows;
}

function buildRow(header, length) {
  return Array(length)
    .fill(header, 0, 1)
    .fill('', 1, length);
}
function buildElevatorRow(header, numberOfFloors, elevators) {
  const row = buildRow(header, numberOfFloors);
  const elevatorMarker = 'X';

  elevators.map((elevator) => {
    const toIdx = Number(numberOfFloors - (elevator.currentFloor));
    const fromIdx = Number(numberOfFloors - (elevator.currentFloor + ELEVATOR_FIX_NUMBER));

    row.fill(elevatorMarker, fromIdx, toIdx);

    return elevator;
  });

  return row;
}
