import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, View, Text } from "react-native";

export default class SwitchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: this.props.rotation,
    };
  }
  static defaultProps = {
    rotation: false,
  };

  render() {
    return (
      <View>
        <Text>Show the image? : {this.state.rotation}</Text>
        <Switch
          rotation={this.state.rotation}
          onValueChange={(rotation) =>
            this.setState({
              rotation: rotation,
            })
          }
        />
      </View>
    );
  }
}
