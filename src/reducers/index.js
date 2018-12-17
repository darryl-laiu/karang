import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import OrderFormReducer from './OrderFormReducer'; 
import OrderReducer from './OrderReducer';

export default combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer,
    orderForm: OrderFormReducer,
    orders: OrderReducer
});
