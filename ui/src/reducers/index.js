import { combineReducers } from 'redux';
import { floorNumDropdownReducer, floorNumDropdownDataReducer } from './floor-num-dropdown-reducer';

const combinedReducers = combineReducers({
    floorNumDropdownReducer,
    floorNumDropdownDataReducer,
    //add more reducers here
});
export default combinedReducers;