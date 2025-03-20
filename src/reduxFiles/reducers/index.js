
import { combineReducers } from 'redux';
import cartReducer from '../../reduxFiles/reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
