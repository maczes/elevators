import {
    ON_REQUEST_ELEVATOR_LIST_SUCCESS,
} from "../actions/elevator-grid-action";
import AppConfig from '../config/app-config';

export function onLoadElevatorsReducer(state = {
    tableData: [], rowTitle: [], isLoading: true
}, action) {
    switch (action.type) {
        case ON_REQUEST_ELEVATOR_LIST_SUCCESS:
            console.log("ON_REQUEST_ELEVATOR_LIST_SUCCESS detected in elevator-grid-reducer");

            let tableData = processElevators(action.elevators);
            console.log("result:", tableData);

            return state = { tableData: tableData, rowTitle: buildRowTitle(), isLoading: false };
        default:
            return state;
    }
}

const buildRowTitle = () => {
    const rowTitleArr = [];

    for (i = 0; i <= AppConfig.NUMBER_OF_FLOORS; i++) {
        rowTitleArr[i] = i.toString();
    }

    return rowTitleArr;
}

const processElevators = (elevatorList) => {
    const elevators = elevatorList.map(c => {
        return {
            id: c.id,
            currentFloor: c.currentFloor
        };
    });

    let tableDataArr = [Array(AppConfig.NUMBER_OF_ELEVATORS).keys()].map(x => {
        const FLOOR_NUMBER_OFFSET = 2; //one row for header, and one for ground floor (level 0)
        const FIXED_NUMBER_OF_FLOORS = AppConfig.NUMBER_OF_FLOORS + FLOOR_NUMBER_OFFSET;
        const rows = [];
        for (let key of x) {
            let row = Array(FIXED_NUMBER_OF_FLOORS)
                .fill('E' + (key + 1), 0, 1)
                .fill('', 1, FIXED_NUMBER_OF_FLOORS);

            e = elevators.filter(obj => obj.id === key);
            if (e) {
                e.map(z => {
                    let toIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor));
                    let fromIdx = parseInt(FIXED_NUMBER_OF_FLOORS - (z.currentFloor + 1));
                    row.fill(elevatorMark, fromIdx, toIdx);
                });
                rows[key] = row;
            }
            else {
                rows[key] = Array(FIXED_NUMBER_OF_FLOORS)
                    .fill('F' + key, 0, 1)
                    .fill('', 1, FIXED_NUMBER_OF_FLOORS);
            }
        }
        return rows;
    })[0];

    return tableDataArr;
}


const elevatorMark = "X";

// colHeaderDecorator = (value) => (
//     <View style={styles.colHeader}>
//         <Text style={styles.headerText}>{value}</Text>
//     </View>
// );

// floorNumberDecorator = (value) => (
//     <View style={styles.rowHeader}>
//         <Text style={styles.headerText}>{value}</Text>
//     </View>
// );

// elevatorCellDecorator = (value) => (
//     <View style={styles.elevatorCell}>
//         <Text style={styles.headerText}>{value}</Text>
//     </View>
// );