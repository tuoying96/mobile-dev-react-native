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

const customerIn = {
  from: {
    width: 200,
    height: 200,
    opacity: 1,
    translateX: -200,
    translateY: -200,
    rotate: "40deg",
  },
  to: {
    width: 100,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "0deg",
  },
};

const ballPath = {
  from: {
    width: 200,
    height: 200,
    opacity: 1,
    translateX: -200,
    translateY: -200,
    rotate: "40deg",
  },
  to: {
    width: 100,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "0deg",
  },
};

export default class BallComponment extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.state = { startPlay: false };

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
      // style={{
      //   backgroundColor: "rgba(255, 255, 255, 0.01)",
      //   transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }],
      // }}
      // {...this.panResponder.panHandlers}
      >
        {/* <Animated.View style={[{ transform }]}> */}
        <Animated.View>
          <Animatable.Image
            animation={this.state.startPlay ? customerIn : ballPath}
            style={[{ width: 200, height: 200 }]}
            source={require("../assets/ball.png")}
          />
        </Animated.View>
        <Button
          style={styles.btn}
          title="Test"
          onPress={() => {
            this.setState({ startPlay: !this.state.startPlay });
            !this.state.startPlay ? this.circle() : "";
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
  mainContainer: {
    flexDirection: "column",
    alignItems: "baseline",
  },
  subContainer: {
    flexDirection: "row",
    flex: 1,
  },
  subContainerPlane: {
    width: 100,
    height: 50,
    flexDirection: "column",
    flex: 1,
  },
});
