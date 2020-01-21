import { connect } from 'react-redux';
import Dropdown from '../components/floor-num-dropdown';

//Actions
import { getInitialFloorAction, getTargetFloorAction, loadDropdownDataAction } from '../actions/floor-num-dropdown-action';

const mapStateToProps = (state) => {
    let newState = {
        floorFrom: state.floorNumDropdownReducer ? state.floorNumDropdownReducer : 0,
        floorTo: state.floorNumDropdownReducer ? state.floorNumDropdownReducer : 0,
        data: state.floorNumDropdownDataReducer ? state.floorNumDropdownDataReducer : [["0"], ['0']],
    };

    console.info(`foor-num-dropdown-reducer state  : ${JSON.stringify(newState)}`);

    return newState;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFromFloorClick: (floor) => {
            dispatch(getInitialFloorAction(floor));
        },
        onToFloorClick: (floor) => {
            dispatch(getTargetFloorAction(floor));
        },
        loadDropdownData: () => {
            dispatch(loadDropdownDataAction());
        },
    };
}

const FloorNumDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default FloorNumDropdownContainer;