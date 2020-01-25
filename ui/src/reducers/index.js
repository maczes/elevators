import { combineReducers } from 'redux';
import { floorNumDropdownDataReducer, floorNumDropdownReducer } from './floor-num-dropdown-reducer';
import onRequestElevatorButtonClickReducer from './mid-grid-reducer';
import { onLoadElevatorsReducer } from './elevator-grid-reducer';
import { onPublishActivityReportReducer } from './info-grid-reducer';

const combinedReducers = combineReducers({
  floorNumDropdownDataReducer,
  floorNumDropdownReducer,
  onRequestElevatorButtonClickReducer,
  onLoadElevatorsReducer,
  onPublishActivityReportReducer,
});

export default combinedReducers;
