import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

export default class FetchComponent extends Component {
  constructor() {
    super();
    this.state = {
      source: [],
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    fetch("http://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((response) => response.json())
      .then((source) => {
        this.setState({ source });
      });
  }

  renderItem({ item }) {
    return (
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.email}</Text>
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
