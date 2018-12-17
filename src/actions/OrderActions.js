import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { 
    ORDER_UPDATE, 
    ORDER_CREATE, 
    ORDERS_FETCH_SUCCESS, 
    ORDER_SAVE_SUCCESS, 
    ORDERS_FETCH_ALL_SUCCESS
} from './types';

export const orderUpdate = ({ prop, value }) => {
    return {
        type: ORDER_UPDATE,
        payload: {prop, value}
    };
};

export const orderCreate = ({ address, date, shift, types }) => {
    const {currentUser} = firebase.auth(); 

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/orders`)
            .push({ address, date, shift, types, completed: false })
            .then(() => {
                dispatch({ type: ORDER_CREATE });
                Actions.pop();
            });
    };
};

export const ordersFetch = () => {
    const { currentUser } = firebase.auth(); 
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/orders`)
            .on('value', snapshot => {
                dispatch({ type: ORDERS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const ordersFetchAll = () => {
    //const { user } = firebase.database().ref(`users/${firebase.auth().uid});
    const items = [];
    return (dispatch) => {
        console.log('fetching');
        firebase.database().ref(`/users/`)
            .on('value', (snapshot) => {
                snapshot.forEach((user) => {
                    const orders = user.child("orders");
                    orders.forEach((order) => {
                        items.push(order.val());
                    });
                });
                dispatch({ type: ORDERS_FETCH_ALL_SUCCESS, payload: items });
            });
    };
};

export const orderSave = ({ address, date, shift, types, uid }) => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/orders/${uid}`)
            .set({ address, date, shift, types })
            .then(() => {
                dispatch({ type: ORDER_SAVE_SUCCESS });
                Actions.pop();
            });
    };
};

export const completedChange = () => {
    return (dispatch) => {
        firebase.databse().ref(`/users/`)
            .on('value', (snapshot) => {
                snapshot.child().child("/orders/uid")
                .set({ completed: true })
                .then(() => {
                    dispatch({ type: ORDER_SAVE_SUCCESS });
                    Actions.pop();
                });
            });
    };
};

export const orderDelete = ({ uid }) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/orders/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: ORDER_CREATE });
                Actions.pop();
            });
    };
};