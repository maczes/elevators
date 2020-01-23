import { combineReducers } from 'redux';
import { floorNumDropdownDataReducer, floorNumDropdownReducer } from './floor-num-dropdown-reducer';
import { onGoButtonClickReducer } from './mid-grid-reducer';

const combinedReducers = combineReducers({
    floorNumDropdownDataReducer,
    floorNumDropdownReducer,
    onGoButtonClickReducer,
});

export default combinedReducers;