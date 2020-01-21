import { combineReducers } from 'redux';
import { floorNumDropdownDataReducer, floorNumDropdownReducer } from './floor-num-dropdown-reducer';

const combinedReducers = combineReducers({
    floorNumDropdownDataReducer,
    floorNumDropdownReducer,
});
export default combinedReducers;