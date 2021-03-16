import React, { Component } from "react";
import { Text, View, Button, Animated, PanResponder } from "react-native";
import * as Animatable from "react-native-animatable";

export default class ImageComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pan = new Animated.ValueXY();

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y },
    ]),

    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });

  render() {
    return (
      <Animated.View
        style={{
          transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }],
        }}
        {...this.panResponder.panHandlers}
      >
        <Animatable.Image
          source={require("../assets/sun.png")}
          animation={{
            from: {
              width: 200,
              height: 200,
              opacity: 1,
              translateX: -100,
              translateY: -100,
              rotate: "40deg",
            },
            to: {
              width: 100,
              height: 100,
              opacity: 1,
              translateX: 100,
              translateY: 100,
              rotate: "0deg",
            },
          }}
        />
      </Animated.View>
    );
  }
}
