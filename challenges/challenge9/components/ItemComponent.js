import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import { deleteItem } from "../service/MyServiceInterface";

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
  };

  handleDelete(index) {
    console.log("@this,props.keys[index]", this.props.keys[index]);
    deleteItem(this.props.keys[index]);
    this.props.items.splice(index, 1);
    Alert.alert("Item Deleted successfully");
  }

  render() {
    let set = new Set();
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          if (!set.has(item.name)) {
            set.add(item.name);
            return (
              <View key={index}>
                <Text style={styles.itemtext}>{item.name}</Text>
                <View style={styles.buttonView}>
                  <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => this.handleDelete(index)}
                  >
                    <Text style={styles.title}>Delete</Text>
                  </TouchableHighlight>
                </View>
              </View>
            );
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ECEBE4",
  },
  itemtext: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: "#D6D0C6",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
  },
  buttonView: {
    width: "30%",
    marginLeft: "65%",
  },
  button: {
    height: 30,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
