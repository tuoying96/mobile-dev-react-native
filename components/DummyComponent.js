import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

export default class DummyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}
