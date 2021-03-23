import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const todos = [
  { name: "My first task" },
  { name: "My second task" },
  { name: "My third task" },
];

export default class FlatListComponent extends Component {
  constructor() {
    super();
    this.state = {
      source: todos,
    };
  }

  renderItem({ item }) {
    return (
      <View>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.source}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#F5FCFF",
    height: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ddd",
    marginBottom: 3,
  },
  text: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
  },
});
