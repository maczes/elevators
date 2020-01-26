/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import {
  ON_REQUEST_ELEVATOR_LIST_SUCCESS,
} from '../actions/elevator-grid-action';
import AppConfig from '../config/app-config';

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
  const elevators = elevatorList.map((c) => ({
    id: c.id,
    currentFloor: c.currentFloor,
  }));

  const tableDataArr = [Array(AppConfig.NUMBER_OF_ELEVATORS).keys()]
    .map((x) => {
      const FLOOR_NUMBER_OFFSET = 2; // one row for header, and one for ground floor (level 0)
      const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + FLOOR_NUMBER_OFFSET;
      const rows = [];

      for (const key of x) {
        const row = Array(FIXED_NUMBER_OF_FLOORS)
          .fill(`E${key + 1}`, 0, 1)
          .fill('', 1, FIXED_NUMBER_OF_FLOORS);

        const e = elevators.filter((obj) => obj.id === key);

        if (e) {
          e.map((z) => {
            const toIdx = Number(FIXED_NUMBER_OF_FLOORS - (z.currentFloor));
            const fromIdx = Number(FIXED_NUMBER_OF_FLOORS - (z.currentFloor + 1));
            row.fill(elevatorMark, fromIdx, toIdx);
            return z;
          });
          rows[key] = row;
        } else {
          rows[key] = Array(FIXED_NUMBER_OF_FLOORS)
            .fill(`F${key}`, 0, 1)
            .fill('', 1, FIXED_NUMBER_OF_FLOORS);
        }
      }
      return rows;
    })[0];

  return tableDataArr;
};

const elevatorMark = 'X';
