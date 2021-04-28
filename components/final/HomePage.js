import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#ddd",
    headerTitleStyle: { fontWeight: "bold," },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to DatabaseComponent"
          onPress={() => {
            this.props.navigation.navigate("DatabaseComponent", {
              someId: 100,
              someTitle: "Title",
            });
          }}
        />
        <Button
          title="Go to MapComponent"
          onPress={() => {
            this.props.navigation.navigate("MapComponent", {
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
