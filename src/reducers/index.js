import { combineReducers } from 'redux';
import forecastsReducer from './forecasts_reducer';

const rootReducer = combineReducers({
  forecasts: forecastsReducer
});

export default rootReducer;
