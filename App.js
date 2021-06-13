import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ShowCheckbox from './src/ShowCheckbox';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ShowCheckbox/>
    );
  }
}
