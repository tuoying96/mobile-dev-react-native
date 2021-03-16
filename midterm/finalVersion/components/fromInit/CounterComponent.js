import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

class CounterComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Animatable.Text
          delay={0}
          duration={1500}
          style={styles.textColor}
          animation={{
            0: { opacity: 0, translateY: 200, color: "red" },
            0.5: { opacity: 1, color: "yellow" },
            1: { opacity: 0, translateY: -200, color: "blue" },
          }}
        >
          3
        </Animatable.Text>
        <Animatable.Text
          delay={1500}
          duration={1500}
          animation={{
            0: {
              opacity: 0,
              translateX: -200,
              color: "red",
            },
            0.5: { opacity: 1, color: "blue" },
            1: {
              opacity: 0,
              translateX: 200,
              color: "yellow",
            },
          }}
          style={styles.textColor}
        >
          2
        </Animatable.Text>
        <Animatable.Text
          delay={3000}
          duration={1500}
          style={styles.textColor}
          animation={{
            0: {
              opacity: 0,
              translateX: 200,
              color: "red",
            },
            0.5: { opacity: 1, color: "yellow" },
            1: {
              opacity: 0,
              translateX: -200,
              color: "blue",
            },
          }}
        >
          1
        </Animatable.Text>
        <Animatable.Text
          delay={4500}
          duration={1500}
          style={styles.textColor}
          animation={{
            0: { opacity: 0, translateY: -200, color: "red" },
            0.5: { opacity: 1, color: "yellow" },
            1: { opacity: 0, translateY: 200, color: "blue" },
          }}
        >
          Start
        </Animatable.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: "white",
    fontSize: 80,
  },
});

export default CounterComponet;
