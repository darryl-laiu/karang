import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { orderUpdate } from '../actions';
import { CardSection, Input } from './common';

class OrderForm extends Component {
    render () {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Address"
                        placeholder="10 Kings Street"
                        value={this.props.address}
                        onChangeText={value => this.props.orderUpdate({ prop: 'address', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date*"
                        placeholder="DD/MM/YYYY"
                        value={this.props.date}
                        onChangeText={value => this.props.orderUpdate({ prop: 'date', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Item Types"
                        placeholder="Plastics, Electronics"
                        value={this.props.types}
                        onChangeText={value => this.props.orderUpdate({ prop: 'types', value})}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Collection Time*</Text>

                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.orderUpdate({ prop: 'shift', value})}
                    >
                        <Picker.Item label="0930-1000" value="0930-1000" />
                        <Picker.Item label="1000-1030" value="1000-1030" />
                        <Picker.Item label="1030-1100" value="1030-1100" />
                        <Picker.Item label="1100-1130" value="1100-1130" />
                        <Picker.Item label="1330-1400" value="1330-1400" />
                        <Picker.Item label="1400-1430" value="1400-1430" />
                        <Picker.Item label="1430-1500" value="1430-1500" />
                        <Picker.Item label="1500-1530" value="1500-1530" />
                        <Picker.Item label="1530-1600" value="1530-1600" />
                        <Picker.Item label="1600-1630" value="1600-1630" />
                        <Picker.Item label="1630-1700" value="1630-1700" />
                        <Picker.Item label="1700-1730" value="1700-1730" />
                        <Picker.Item label="1930-2000" value="1930-2000" />
                        <Picker.Item label="2000-2030" value="2000-2030" />
                        <Picker.Item label="2030-2100" value="2030-2100" />
                        <Picker.Item label="2100-2130" value="2100-2130" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Text>*Minimum 1 day's notice</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => { 
    const{address, date, shift, types} = state.orderForm;

    return {address, date, shift, types};
};

export default connect(mapStateToProps, { orderUpdate })(OrderForm);