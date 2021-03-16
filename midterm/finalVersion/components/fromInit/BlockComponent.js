import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatableButton = Animatable.createAnimatableComponent(Button);

export default class BlockComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Animatable.Text
          animation={{
            from: {
              opacity: 0,
              color: "red",
              fontSize: 100,
              translateX: -100,
              translateY: -100,
              rotate: "0deg",
            },
            to: {
              opacity: 1,
              color: "blue",
              fontSize: 20,
              translateX: 100,
              translateY: 100,
              rotate: "0deg",
            },
          }}
        >
          fdfdfd
        </Animatable.Text>
        <AnimatableButton
          title="press"
          animation={{
            from: {
              opacity: 0,
              color: "blue",
              fontSize: 100,
              translateX: -100,
              translateY: -100,
              rotate: "0deg",
            },
            to: {
              opacity: 1,
              color: "red",
              fontSize: 20,
              translateX: 100,
              translateY: 100,
              rotate: "0deg",
            },
          }}
        />
      </View>
    );
  }
}
