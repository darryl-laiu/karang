import React, {Component} from 'react';
import {connect} from 'react-redux';
import { orderUpdate, orderCreate } from '../actions';
import {Card, CardSection, Button} from './common';
import OrderForm from './OrderForm';

class OrderCreate extends Component {
    onButtonPress(){
        const { address, date, shift, types } = this.props;

        this.props.orderCreate({ address, date, shift: shift || '2100-2130', types, completed: false});
    }
    
    render() {
        return(
            <Card>
                <OrderForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {address, date, shift, types} = state.orderForm; 

    return {address, date, shift, types};
};

export default connect(mapStateToProps, { orderUpdate, orderCreate })(OrderCreate);