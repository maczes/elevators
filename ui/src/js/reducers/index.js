import { combineReducers } from 'redux';
import { floorNumDropdownDataReducer, floorNumDropdownReducer } from './floor-num-dropdown-reducer';
import { onGoButtonClickReducer } from './mid-grid-reducer';
import { onLoadElevatorsReducer } from './elevator-grid-reducer';
import { onPublishActivityReportReducer } from './info-grid-reducer';
import { onErrorReducer } from './error-handler-reducer';

const combinedReducers = combineReducers({
  floorNumDropdownDataReducer,
  floorNumDropdownReducer,
  onGoButtonClickReducer,
  onLoadElevatorsReducer,
  onPublishActivityReportReducer,
  onErrorReducer,
});

export default combinedReducers;
