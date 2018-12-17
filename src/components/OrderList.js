import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ordersFetch } from '../actions';
import { ListView, Text, View } from 'react-native';
import ListItem from './ListItem';
import { CardSection } from './common';

class OrderList extends Component {

    componentWillMount(){
        this.props.ordersFetch();

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
    }

    renderRow(order){
        return <ListItem order={order} />;
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

const styles={
    notifierStyle:{
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
}

const mapStateToProps = state =>{
    const orders = _.map(state.orders, (val, uid) => {
        return { ...val, uid };
    });

    return { orders }; 
};

export default connect(mapStateToProps, { ordersFetch })(OrderList);