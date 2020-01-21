import { connect } from 'react-redux';
import Dropdown from '../components/floor-num-dropdown';

//Actions
import { getInitialFloorAction, getTargetFloorAction } from '../actions/floor-num-dropdown-action';

const mapStateToProps = (state) => {
    alert(`state after changed : ${JSON.stringify(state.floorNumDropdownReducer)}`);
    return {
        floor: state.floorNumDropdownReducer ? state.floorNumDropdownReducer : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFromFloorClick: (floor) => {
            dispatch(getInitialFloorAction(floor));
        },
        onToFloorClick: (floor) => {
            dispatch(getTargetFloorAction(floor));
        }
    };
}

const FloorNumDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(Dropdown);
export default FloorNumDropdownContainer;