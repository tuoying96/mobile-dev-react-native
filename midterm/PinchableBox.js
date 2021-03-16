import React, { Component } from "react";
import { render } from "react-dom";
import { Animated, Dimensions } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

const screen = Dimensions.get("window");

export default class PinchableBox extends Component {
  scale = new Animated.Value(1);
  constructor(props) {
    super(props);
    this.state = {
      pic1: "https://picsum.photos/id/10/50/230",
      pic2: "https://picsum.photos/id/2/50/230",
      pic3: "https://picsum.photos/id/30/50/230",
    };
  }

  onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  render() {
    return (
      <PinchGestureHandler
        onGestureEvent={this.onPinchEvent}
        onHandlerStateChange={this.onPinchStateChange}
      >
        <Animated.Image
          source={{ uri: this.state.pic1 }}
          style={{
            width: screen.width,
            height: 300,
            transform: [{ scale: this.scale }],
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    );
  }
}
