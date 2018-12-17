import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    AUTH_EMAIL_CHANGED,
    AUTH_PASSWORD_CHANGED,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAIL,
    AUTH_LOGIN_USER,
    LOGIN_ADMIN_SUCCESS
} from './types';

export const authEmailChanged = (text) => {
    return {
        type: AUTH_EMAIL_CHANGED,
        payload: text
    };
};

export const authPasswordChanged = (text) => {
    return {
        type: AUTH_PASSWORD_CHANGED,
        payload: text
    };
};

export const authLoginUser = ({ auth_email, auth_password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOGIN_USER });
        if(auth_email === 'admin@karang.com') {
            firebase.auth().signInWithEmailAndPassword(auth_email, auth_password)
                .then(user => loginAdminSuccess(dispatch, user));
        } else {
            firebase.auth().signInWithEmailAndPassword(auth_email, auth_password)
                .then(user => authLoginUserSuccess(dispatch, user))
                .catch(() => authLoginUserFail(dispatch));
        }
    };
};

const authLoginUserFail = (dispatch) => {
    dispatch({ type: AUTH_LOGIN_USER_FAIL });
};

const authLoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginAdminSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_ADMIN_SUCCESS,
        payload: user
    });

    Actions.admin();
};