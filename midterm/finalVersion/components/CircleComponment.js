import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  Easing,
} from "react-native";
import * as Animatable from "react-native-animatable";
const AnimatableButton = Animatable.createAnimatableComponent(Button);

export default class CircleComponment extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.state = { startCircle: false };

    ////circle
    var range = 1,
      snapshot = 50,
      radius = 200;
    /// translateX
    var inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateX = this.animated.interpolate({ inputRange, outputRange });

    /// translateY
    var inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = -Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    this.translateY = this.animated.interpolate({ inputRange, outputRange });
  }

  ifCircle = () => {
    if (this.state.startCircle) {
      this.circle();
    }
  };

  // https://stackoverflow.com/questions/47911256/react-native-circle-transform-translate-animation
  circle() {
    this.animated.setValue(0);

    // Animated.loop(
    //   Animated.timing(this.animated, {
    //     toValue: 1,
    //     duration: 2000,
    //     useNativeDriver: true,
    //     easing: Easing.linear,
    //   })
    // ).start();

    Animated.timing(this.animated, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(this.ifCircle);
  }

  //// drag
  pan = new Animated.ValueXY();

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: this.pan.x, dy: this.pan.y }],
      { useNativeDriver: false }
    ),

    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });
  render() {
    const transform = [
      { translateY: this.translateY },
      { translateX: this.translateX },
    ];
    return (
      <Animated.View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.01)",
          transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }],
        }}
        {...this.panResponder.panHandlers}
      >
        <Animated.View style={[{ transform }]}>
          <Animatable.Image
            style={[{ width: 200, height: 200 }]}
            source={require("../assets/sun.png")}
          />
        </Animated.View>
        <Button
          style={styles.btn}
          title="Test"
          onPress={() => {
            this.setState({ startCircle: !this.state.startCircle });
            !this.state.startCircle ? this.circle() : "";
            // this.circle();
          }}
        />
        {/* <AnimatableButton
          title="Test"
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
        /> */}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "red",
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
});
