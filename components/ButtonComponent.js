"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Alert,
  _ScrollView,
  Dimensions,
} from "react-native";

const styles2 = StyleSheet.create({
  toggle: {
    padding: 5,
    backgroundColor: "#ccc",
  },
});

const alertMessage = "You pressed a button";

class ButtonComponent extends Component {
  constructor() {
    super();
    this.state = {
      screenJump: Dimensions.get("window").height / 5,
    };
  }

  btnPress() {
    Alert.alert("My alert", alertMessage, [
      { text: "Cancel", onPress: () => console.log("You cancelled") },
      { text: "OK", onPress: () => console.log("You agreed") },
    ]);
  }

  render() {
    return (
      <View>
        <ScrollView
          ref={(ref) => (this.ScrollView = ref)} //什么逻辑？
          // Hi Professor, could you please give us more explaination of `ref={(ref) => (this.ScrollView = ref)}`? I googled it but I am not quite understand the logic/syntax of this code.
          contentContainerStyle={{ padding: 30 }}
          // horizontal={true}
          onContentSizeChange={(contenWidth, contenHeight) => {
            console.log("Height " + contenHeight + "Weight " + contenWidth);
          }}
          onScroll={() => console.log("You are scrolling")}
          pagingEnabled={true}
        >
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
          <Text style={{ fontSize: 96 }}>Large text</Text>
        </ScrollView>
        <Button
          onPress={() => {
            this.setState({
              screenJump: this.state.screenJump + 50,
            });
            this.ScrollView.scrollTo({
              y: this.state.screenJump,
              animated: true,
            });
          }}
          title="Learn Mode"
          color="violet"
          accessibilityLabel="This is a button"
        />
      </View>
    );
  }
}

export default ButtonComponent;
