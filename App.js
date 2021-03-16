import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Challenge5Component from "./components/Challenge5Component";
import TouchableComponent from "./components/TouchableComponent";
import ButtonComponent from "./components/ButtonComponent";

// import Spring0 from "./spring/Spring0.js";
// import Spring1 from "./spring/Spring1.js";
// import Spring2 from "./spring/Spring2/Spring2.js";
// import Spring3 from "./spring/Spring3.js";
// import Spring4 from "./spring/Spring4/Spring4.js";
// import Spring5 from "./spring/Spring5/Spring5.js";
// import Spring6 from "./spring/Spring6/Spring6.js";

import ExampleView from "./midterm/ExampleView.js";
import DraggableBox from "./midterm/DraggableBox.js";
import PinchableBox from "./midterm/PinchableBox";
import RnGestureHandler from "./midterm/RnGestureHandler";
import FadeInView from "./midterm/FadeInView";

export default function App() {
  return (
    <View style={styles.container}>
      <Challenge5Component />
      {/* <DraggableBox /> */}
      {/* <PinchableBox /> */}
      {/* <RnGestureHandler /> */}
      {/* <FadeInView /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
