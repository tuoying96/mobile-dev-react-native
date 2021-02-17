import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Challenge4Component extends Component {
  render() {
    return (
      <View>
        <View>
          <Text></Text>
          <View>
            <View style={styles.topContainer}>
              <View style={styles.triangle}></View>
              <View style={styles.rectangle}></View>
              {/* <View style={styles.parallelogram}>
                <View style={styles.parallelogramRight} />
                <View style={styles.parallelogramInner} />
                <TView style={styles.parallelogramLeft} />
              </View> */}
              <View style={styles.rectangle}></View>
              <View style={styles.triangle2}></View>
              <View style={styles.magnifyingGlass}>
                <View style={styles.magnifyingGlassCircle} />
                <View style={styles.magnifyingGlassStick} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
  },
  magnifyingGlass: {},
  magnifyingGlassCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#f6e4cd",
  },
  magnifyingGlassStick: {
    position: "absolute",
    right: -20,
    bottom: -10,
    backgroundColor: "#d9bfa3",
    width: 50,
    height: 10,
    transform: [{ rotate: "45deg" }],
  },
  myText: {
    color: "red",
    fontSize: 20,
  },
  rectangle: {
    //To make Rectangle Shape
    width: 20,
    height: 120,
    backgroundColor: "#AD322B",
  },
  triangle: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    marginRight: -30,
    transform: [{ rotate: "125deg" }],
    borderLeftWidth: 25,
    borderRightWidth: 9,
    borderBottomWidth: 16,
    paddingTop: 40,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#634251",
  },
  triangle2: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    marginLeft: -65,
    transform: [{ rotate: "305deg" }],
    borderLeftWidth: 25,
    borderRightWidth: 9,
    borderBottomWidth: 16,
    paddingTop: 120,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#634251",
  },
  trapezoid: {
    //To make Trapezoid Shape
    width: 200,
    height: 0,
    borderBottomColor: "#D7A870",
    // borderTopWidth: 100,
    borderBottomWidth: 100,
    borderLeftWidth: 5,
    borderRightWidth: 80,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },

  parallelogram: {
    width: 150,
    height: 100,
  },
  parallelogramInner: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "red",
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: "absolute",
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: "absolute",
  },

  circle: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#FF00FF",
  },
  oval: {
    //To make Oval Shape
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: "#ED2525",
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
  },
});
