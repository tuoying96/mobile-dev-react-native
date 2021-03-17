import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default class SecondScreen extends Component {
  render() {
    let titles = ["Rock", "Paper", "Scissor"];
    const { route, navigation } = this.props;
    const { someId, someTitle } = route.params;
    return (
      <View style={styles.container}>
        <Text>Third Screen</Text>
        <Button
          onPress={() => navigation.navigate("Modal")}
          title="Open Modal"
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});
