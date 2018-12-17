import {
    ORDERS_FETCH_SUCCESS,
    ORDERS_FETCH_ALL_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ORDERS_FETCH_SUCCESS:
            return action.payload;
        case ORDERS_FETCH_ALL_SUCCESS:
            return action.payload;
        default:
            return state;     
    }
};