import { combineReducers } from 'redux';
import salesReducer from '../slices/salesSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  data: salesReducer,
  ui: uiReducer,
});

export default rootReducer;