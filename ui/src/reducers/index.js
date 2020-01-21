import { combineReducers } from 'redux';
import floorNumDropdownReducer from './floor-num-dropdown-reducer';

const combinedReducers = combineReducers({
    floorNumDropdownReducer,
    //add more reducers here
});
export default combinedReducers;