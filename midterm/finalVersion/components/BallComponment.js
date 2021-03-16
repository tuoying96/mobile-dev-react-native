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
const fade = {
  0: {
    fontSize: 20,
    opacity: 1,
    color: "#5F6985",
    translateX: -100,
    translateY: -100,
    rotate: "0deg",
  },
  0.5: {
    fontSize: 50,
    opacity: 0.5,
    color: "#CCD6BD",
    // translateX: 100,
    // translateY: 100,
    rotate: "50deg",
  },
  1: {
    fontSize: 20,
    opacity: 1,
    color: "#F77409",
    translateX: 100,
    translateY: 100,
    rotate: "0deg",
  },
};

export default class BallComponment extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.state = {
      startCircle: false,
      iteration: 1,
      ifShow: true,
      player: 1,
      reach3: false,
    };

    ////circle
    var range = 1,
      snapshot = 50,
      radius = 100;
    /// translateX
    var inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
      console.log("@In ", inputRange);
      console.log("@Out ", outputRange);
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
    if (this.state.iteration < 3) {
      this.circle();
      this.setState({
        iteration: this.state.iteration + 1,
      });
    } else {
      let rnd = Math.random() >= 0.5 ? 1 : 0;
      this.setState({ player: rnd });
      this.setState({ reach3: true });
      this.setState({ ifShow: !this.state.ifShow });
    }
  };

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
      <View style={styles.mainContainer}>
        {/* Up net */}
        <Animated.View style={styles.upContainer}>
          <Animatable.Image
            animation={{
              from: {
                translateX: 110,
                translateY: -130,
              },
              to: {
                translateX: 110,
                translateY: -130,
              },
            }}
            style={[{ width: 200, height: 100 }]}
            source={require("../assets/gate1.png")}
          />
        </Animated.View>

        {/* Ball */}
        <View style={styles.upContainer}>
          {this.state.ifShow ? (
            <Animated.View>
              <Animated.View style={[{ transform }]}>
                <Animatable.Image
                  animation={{
                    from: {
                      translateX: 100,
                      translateY: 300,
                    },
                    to: {
                      translateX: 100,
                      translateY: 300,
                    },
                  }}
                  style={[{ width: 40, height: 40 }]}
                  source={require("../assets/ball.png")}
                />
              </Animated.View>
            </Animated.View>
          ) : (
            <View style={styles.subContainer}>
              <Animated.View>
                <Animatable.Text
                  animation={fade}
                  duration={2000}
                  // animation={this.state.isFade ? fade : plainText}
                >
                  Player {this.state.player} Won
                </Animatable.Text>
              </Animated.View>
            </View>
          )}

          {/* Playgrounnd */}
          <Animatable.Image
            animation={{
              from: {
                opacity: 0,
              },
              to: {
                opacity: 0,
              },
            }}
            style={[{ width: 400, height: 400 }]}
            source={require("../assets/ground.png")}
          />
        </View>

        {/* Down net */}
        <Animated.View style={styles.downContainer}>
          <Animatable.Image
            animation={{
              from: {
                translateX: 110,
                translateY: 300,
              },
              to: {
                translateX: 110,
                translateY: 300,
              },
            }}
            style={[{ width: 200, height: 100 }]}
            source={require("../assets/gate2.png")}
          />
        </Animated.View>
        <Animated.View style={styles.subContainer}>
          <Button
            style={styles.subContainer}
            style={styles.btn}
            title={this.state.ifShow ? "Play" : "Replay the game"}
            onPress={() => {
              this.state.ifShow
                ? ""
                : this.setState({ ifShow: !this.state.ifShow });
              this.state.reach3 ? this.setState({ iteration: 1 }) : "";
              // this.state.isPlaying ? "" : this.setState(!this.state.ifShow);
              this.state.ifShow ? this.circle() : "";
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignItems: "baseline",
  },
  upContainer: {
    alignItems: "flex-start",
  },
  downContainer: {
    alignItems: "baseline",
  },
  ballContainer: {
    marginTop: 100,
    alignItems: "center",
  },
});
