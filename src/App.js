import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';  
import firebase from 'firebase';   
import ReduxThunk from 'redux-thunk'; 
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyA6L-4pJAk4TtkhYdQgAMp-bVINiOpucVQ",
            authDomain: "karang-de4ff.firebaseapp.com",
            databaseURL: "https://karang-de4ff.firebaseio.com",
            projectId: "karang-de4ff",
            storageBucket: "karang-de4ff.appspot.com",
            messagingSenderId: "70468451656"
          };
        firebase.initializeApp(config);

    }
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;