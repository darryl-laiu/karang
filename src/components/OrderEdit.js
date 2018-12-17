import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { orderUpdate, orderSave, orderDelete } from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class OrderEdit extends Component {

    state={ showModal: false };

    componentWillMount() {
        _.each(this.props.order, (value, prop) => {
            this.props.orderUpdate({ prop, value });
        });
    }

    onButtonPress(){
        const {address, date, shift, types} = this.props;

        this.props.orderSave({ address, date, shift, types, uid: this.props.order.uid });
    }

    onAccept(){
        const { uid } = this.props.order;

        this.props.orderDelete({ uid });
    }

    onConfirm(){
        const { uid } = this.props.order;

        this.props.orderDelete({ uid });
    }

    onDecline(){
        this.setState({ showModal: false });
    }

    render(){
        return(
            <Card>
                <OrderForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete 
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onConfirm.bind(this)} >
                        Collection Complete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {address, date, shift, types} = state.orderForm;

    return {address, date, shift, types};
};

export default connect (mapStateToProps, {orderUpdate, orderSave, orderDelete})(OrderEdit);