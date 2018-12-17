import {
    AUTH_EMAIL_CHANGED,
    AUTH_PASSWORD_CHANGED,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAIL,
    AUTH_LOGIN_USER,
    LOGIN_ADMIN_SUCCESS 
} from '../actions/types';

const INITIAL_STATE = { 
    auth_email: '',
    auth_password: '',
    auth_user: null,
    auth_error: '', 
    auth_loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case AUTH_EMAIL_CHANGED:
            return { ...state, auth_email: action.payload };
        case AUTH_PASSWORD_CHANGED:
            return { ...state, auth_password: action.payload};
        case AUTH_LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, auth_user: action.payload };
        case AUTH_LOGIN_USER_FAIL:
            return { ...state, auth_error: 'Authentication Failed', auth_password: '', auth_loading: false};
        case AUTH_LOGIN_USER:
            return { ...state, auth_loading: true, auth_error: ''};
        case LOGIN_ADMIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, auth_user: action.payload };
        default:
            return state;
    }
};