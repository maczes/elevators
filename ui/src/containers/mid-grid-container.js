import { connect } from 'react-redux';
import MidGrid from '../components/mid-grid';

import {
    onGoButtonClickAction,
} from '../actions/mid-grid-action';

const mapStateToProps = (state) => {

    let newState = {
        elevator: state.onGoButtonClickReducer,
        fromFloor: state.floorNumDropdownReducer.fromFloor,
        toFloor: state.floorNumDropdownReducer.toFloor,
    };
    //console.info(`mid-grid reducer state  : ${JSON.stringify(newState)}`);
    return newState;
};

const mapDispatchToProps = (dispatch) => {

    return {
        onGoButtonClick: (fromFloor, toFloor) => {
            dispatch(onGoButtonClickAction(fromFloor, toFloor));
        },
    };
}

const MidGridContainer = connect(mapStateToProps, mapDispatchToProps)(MidGrid);

export default MidGridContainer;