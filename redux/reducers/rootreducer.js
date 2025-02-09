import {combineReducers} from 'redux';
import {itemCartReducer} from './itemCartReducer';
import {favouriteItemsReducer} from './favouriteItemsReducer';
export default combineReducers({
  itemCartReducer,
  favouriteItemsReducer,
});
