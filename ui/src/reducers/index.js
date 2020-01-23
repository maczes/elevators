import { combineReducers } from 'redux';
import { floorNumDropdownDataReducer, floorNumDropdownReducer } from './floor-num-dropdown-reducer';
import { onGoButtonClickReducer } from './mid-grid-reducer';
import { onLoadElevatorsReducer } from './elevator-grid-reducer'

const combinedReducers = combineReducers({
    floorNumDropdownDataReducer,
    floorNumDropdownReducer,
    onGoButtonClickReducer,
    onLoadElevatorsReducer,
});

export default combinedReducers;