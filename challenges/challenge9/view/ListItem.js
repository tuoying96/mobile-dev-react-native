import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import ItemComponent from "../components/ItemComponent";

import { db } from "../db";

let itemsRef = db.ref("/items");

export default class ListItem extends Component {
  state = {
    items: [],
    keys: [],
    uniqueItems: [],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      if (data !== null) {
        let items = Object.values(data);
        let keys = Object.keys(data);
        this.setState({ items: items, keys: keys });
      } else {
        this.setState({
          items: [],
          keys: [],
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} keys={this.state.keys} />
        ) : (
          <Text>No Available items</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ECEBE4",
  },
  flatList: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: "#F5FCFF",
    height: 50,
    width: "80%",
  },
  text: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
  },
});
