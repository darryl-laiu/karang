import React, { Component } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { orderUpdate, completedChange } from '../actions';
import { Card, CardSection, Button } from './common';

class AdminOrderDisplay extends Component {
	componentWillMount() {
        _.each(this.props.order, (value, prop) => {
            this.props.orderUpdate({ prop, value });
        });
    }

    onButtonPress() {
    	// this.props.completedChange();
    }

	render() {
		const { address, date, types, shift, completed } = this.props.order; 
		return (
			<Card>
				<CardSection>
					<Text>Address: </Text>
					<Text style={styles.variableStyle}>{address}</Text>
				</CardSection>

				<CardSection>
					<Text>Date: </Text>
					<Text>{date}</Text>
				</CardSection>

				<CardSection>
					<Text>Item Types: </Text>
					<Text>{types}</Text>
				</CardSection>

				<CardSection>
					<Text>Shift: </Text>
					<Text>{shift}</Text>
				</CardSection>

				<CardSection>
					<Text>Completed: </Text>
					<Text>{completed.toString()}</Text>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Completed
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	variableStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
};

const mapStateToProps = (state) => { 
     const{address, date, shift, types, completed} = state.orderForm;

    return {address, date, shift, types, completed};
};

export default connect(mapStateToProps, { orderUpdate, completedChange })(AdminOrderDisplay);
