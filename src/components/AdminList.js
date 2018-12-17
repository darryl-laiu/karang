import _ from 'lodash';
import React, {Component} from 'react';
import firebase from 'firebase';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ordersFetchAll } from '../actions';  
import AdminListItem from './AdminListItem';


class AdminList extends Component {
    componentWillMount(){
        this.props.ordersFetchAll();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ orders }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(orders);
        console.log(ds);
    }

    renderRow(order){
        return <AdminListItem order={order} />;
    }

    render() {
        return(
            <View>
                <Text style={styles.notifierStyle}>
                    Tap an order to view/edit it
                </Text>
            
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = {
    notifierStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#003300',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        fontWeight: 'bold'
    }
};

const mapStateToProps = state => {
    const orders = _.map(state.orders, (val, uid) => {
        // const eachUsersOrders = firebase.database().ref(`/users/${val.uid}/orders`);
        // console.log(eachUsersOrders);
        return { ...val, uid };
    });
    console.log(orders);

    return { orders }; 
};

export default connect(mapStateToProps, { ordersFetchAll })(AdminList);