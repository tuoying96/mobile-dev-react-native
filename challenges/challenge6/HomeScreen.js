import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold," },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to second screen"
          onPress={() => {
            this.props.navigation.navigate("Second", {
              picId: 1,
            });
          }}
        />
        <Button
          title="Go to third screen"
          onPress={() => {
            this.props.navigation.navigate("Third", {
              someId: 100,
              someTitle: "Title",
            });
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
