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

const customerPlane = {
  from: {
    width: 200,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "180deg",
  },
  to: {
    width: 200,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "360deg",
  },
};

const customerPlaneRotate = {
  from: {
    width: 200,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "0deg",
  },
  to: {
    width: 200,
    height: 100,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    rotate: "180deg",
  },
};

const bounce = {
  0: {
    width: 20,
    height: 20,
    rotate: "-40deg",
  },
  0.5: {
    width: 20,
    height: 20,
    rotate: "10deg",
  },
  1: {
    width: 20,
    height: 20,
    rotate: "-40deg",
  },
};

const plainImage = {
  from: {
    // width: 200,
    // height: 200,
    opacity: 1,
    // translateX: -200,
    // translateY: -200,
    rotate: "40deg",
  },
  to: {
    // width: 100,
    // height: 100,
    opacity: 1,
    // translateX: 0,
    // translateY: 0,
    rotate: "0deg",
  },
};

export default class AllComponment extends Component {
  constructor(props) {
    super(props);
    this.state = { ifRotate: false, isFade: true, isBounce: false };
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
    onPanResponderMove: Animated.event(
      [null, { dx: this.pan.x, dy: this.pan.y }],
      { useNativeDriver: false }
    ),

    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Drag the sun */}
        {/* <View style={styles.subContainer}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              transform: [
                { translateX: this.pan.x },
                { translateY: this.pan.y },
              ],
            }}
            {...this.panResponder.panHandlers}
          >
            <Animatable.Image
              source={require("../assets/sun.png")}
              animation={customerIn}
            />
          </Animated.View>
        </View> */}

        {/* Fade the text */}
        <View style={styles.subContainer}>
          <AnimatableTouchableOpacity
            animation="bounceIn"
            onPress={() => this.setState({ isFade: !this.state.isFade })}
          >
            <Animated.View>
              <Animatable.Text
                duration={10000}
                animation={this.state.isFade ? fade : plainText}
              >
                Hello, this is a litter sun
              </Animatable.Text>
            </Animated.View>
          </AnimatableTouchableOpacity>
        </View>

        {/* Bounce the sun */}
        <Animated.View style={styles.subContainer}>
          {/* <Animated.View
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              transform: [
                { translateX: this.pan.x },
                { translateY: this.pan.y },
              ],
            }}
            {...this.panResponder.panHandlers}
          > */}
          <AnimatableTouchableOpacity
            iterationCount={this.state.isBounce ? "infinite" : 1}
            animation={this.state.isBounce ? bounce : plainImage}
            onPress={() => this.setState({ isBounce: !this.state.isBounce })}
          >
            <Animated.Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/sun.png")}
            />
          </AnimatableTouchableOpacity>
          {/* </Animated.View> */}
        </Animated.View>

        {/* Rotate the Airplane */}
        {/* <View style={styles.subContainerPlane}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              // transform: [
              //   { translateX: this.pan.x },
              //   { translateY: this.pan.y },
              // ],
            }}
            {...this.panResponder.panHandlers}
          >
            <Animatable.Image
              source={require("../assets/plane.png")}
              animation={
                this.state.ifRotate ? customerPlaneRotate : customerPlane
              }
            />
            <Button
              style={styles.btn}
              title="Rotate the Airplane"
              onPress={() => {
                this.setState({ ifRotate: !this.state.ifRotate });
              }}
            />
          </Animated.View>
        </View> */}
      </View>
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
    flexDirection: "row",
    alignItems: "baseline",
  },
  subContainer: {
    flexDirection: "column",
    flex: 1,
  },
  subContainerPlane: {
    width: 100,
    height: 50,
    flexDirection: "column",
    flex: 1,
  },
});
