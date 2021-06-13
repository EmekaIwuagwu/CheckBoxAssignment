import React, { Component } from 'react';
import { View, Text , Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class ShowCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSelected: false
    };
  }

  checkAndSayHello = () =>{
    Alert.alert('Hello from Checkbox!');
  }

  render() {
    return (
      <View>
        <CheckBox
        value={this.state.isSelected}
        onValueChange={()=>this.checkAndSayHello()}
        />
      </View>
    );
  }
}
