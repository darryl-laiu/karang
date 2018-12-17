import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import OrderList from './components/OrderList';
import OrderCreate from './components/OrderCreate';
import OrderEdit from './components/OrderEdit';
import AdminList from './components/AdminList';
import AdminOrderDisplay from './components/AdminOrderDisplay';

const logOut = () => {
    return (
        firebase.auth().signOut()
        .then(() => Actions.auth()),
        console.log('logout pressed')
    );
};

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                    <Scene key="signUp" component={SignUp} title="Please Sign Up" />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add Order"    
                        onRight={() => Actions.orderCreate()}
                        leftTitle="Log Out"
                        onLeft={() => logOut()}
                        key="orderList" 
                        component={OrderList} 
                        title="Existing Orders" 
                        titleStyle={{ textAlign: 'center', flex: 1 }}
                        initial
                    />
                    <Scene key="orderCreate" component={OrderCreate} title="Create Order" />
                    <Scene key="orderEdit" component={OrderEdit} title="Edit Order" />
                </Scene>
                <Scene key="admin">
                    <Scene 
                        key="adminList" 
                        component={AdminList} 
                        title="Global Order Pool"
                        leftTitle="Log Out"
                        onLeft={() => logOut()} 
                    />
                    <Scene key="adminOrderDisplay" component={AdminOrderDisplay} title="Order" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
