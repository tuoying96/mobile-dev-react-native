import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "@react-native-community/slider";
import { View, Text, Image } from "react-native";

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: this.props.pic,
    };
  }
  static defaultProps = {
    size: 100,
  };

  render() {
    return (
      <View>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={25}
          maximumValue={200}
          step={25}
          minimumTrackTintColor="#FFFF00"
          maximumTrackTintColor="#FF0000"
        />

        <Image
          source={{ uri: this.state.pic }}
          style={{
            width: 200,
            height: 230,
            transform: [{ rotate: "90deg" }],
          }}
        />
      </View>
    );
  }
}
