import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Home extends Component {
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
          title="Go to Add Items"
          onPress={() => {
            this.props.navigation.navigate("AddItem", {
              someId: 100,
              someTitle: "Title",
            });
          }}
        />
        <Button
          title="Go to List/Delete Items"
          onPress={() => {
            this.props.navigation.navigate("ListItem", {
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
