import { combineReducers } from 'redux';
import searchReducer from './reducers/searchReducer';

export default combineReducers({
  SearchReducer: searchReducer
});
