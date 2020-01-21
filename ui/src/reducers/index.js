import { combineReducers } from 'redux';
import { floorNumDropdownReducer, floorNumDropdownDataReducer } from './floor-num-dropdown-reducer';

const combinedReducers = combineReducers({
    floorNumDropdownReducer,
    floorNumDropdownDataReducer,
    //add all reducers used application wide  
});
export default combinedReducers;