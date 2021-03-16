import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(
  TouchableOpacity
);

// https://palettable.io/5F6985-FBD4CC-C7E1D0-CCD6BD-FFF1D7
const fade = {
  0: {
    fontSize: 20,
    opacity: 1,
    color: "#5F6985",
    // translateX: -100,
    // translateY: -100,
    rotate: "0deg",
  },
  0.5: {
    fontSize: 20,
    opacity: 0.5,
    color: "#CCD6BD",
    // translateX: 100,
    // translateY: 100,
    rotate: "0deg",
  },
  1: {
    fontSize: 20,
    opacity: 0,
    color: "#FFF1D7",
    // translateX: 100,
    // translateY: 100,
    rotate: "0deg",
  },
};

const plainText = {
  from: {
    fontSize: 20,
    opacity: 1,
    color: "#5F6985",
    // translateX: -100,
    // translateY: -100,
    rotate: "0deg",
  },
  to: {
    fontSize: 20,
    opacity: 1,
    color: "#5F6985",
    // translateX: -100,
    // translateY: -100,
    rotate: "0deg",
  },
};

export default class FadeComponment extends Component {
  constructor(props) {
    super(props);
    this.state = { isFade: true };
  }
  render() {
    return (
      <Animated.View>
        <AnimatableTouchableOpacity
          onPress={() => this.setState({ isFade: !this.state.isFade })}
        >
          <Animatable.Text
            duration={10000}
            animation={this.state.isFade ? fade : plainText}
          >
            Hello, this is a litter sun
          </Animatable.Text>
        </AnimatableTouchableOpacity>
      </Animated.View>
    );
  }
}
