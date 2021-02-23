import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles2 = StyleSheet.create({
  toggle: {
    padding: 5,
    backgroundColor: "#ccc",
  },
});

class TouchableComponent extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  render() {
    let isToggle = this.state.toggle ? "YES" : "NO";
    return (
      <View>
        <Text>{isToggle}</Text>
        <TouchableHighlight
          underlayColor="yellow"
          onPress={() => this.setState({ toggle: !this.state.toggle })}
        >
          <Text style={styles2.toggle}>Toggle</Text>
        </TouchableHighlight>

        <TouchableOpacity>
          <Image source={require("../assets/button.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TouchableComponent;
