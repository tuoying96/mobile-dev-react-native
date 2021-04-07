import React, { Component } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { addItem, readItem } from "../service/MyServiceInterface";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false,
      currLen: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text,
    });
  }
  handleSubmit() {
    addItem(this.state.name);
    console.log(this.state.name);
    Alert.alert("Item saved successfully");
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>AddItem Screen</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.title}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    backgroundColor: "#ECEBE4",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginTop: 10,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white",
  },
  button: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  buttonText: {},
});
