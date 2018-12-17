import {
    ORDER_UPDATE,
    ORDER_CREATE,
    ORDER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    address: '',
    date: '',
    shift: '',
    types: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDER_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case ORDER_CREATE:
            return INITIAL_STATE;
        case ORDER_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};