import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class SecondScreen extends Component {
  render() {
    let titles = ["Rock", "Paper", "Scissor"];
    const { route, navigation } = this.props;
    const { someId, someTitle } = route.params;
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Text>Id: {JSON.stringify(someId)}</Text>
        <Text>Title: {JSON.stringify(someTitle)}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Go to Second... again"
          onPress={() => {
            navigation.setParams({
              someId: Math.floor(Math.random() * 100),
              someTitle: titles[Math.floor(Math.random() * titles.length)],
            });
            navigation.push("Second"); // No difference???
          }}
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
