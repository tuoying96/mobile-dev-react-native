import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Challenge5Component from "./components/Challenge5Component";
import TouchableComponent from "./components/TouchableComponent";
import ButtonComponent from "./components/ButtonComponent";
import Spring0 from "./spring/Spring0.js";
import Spring1 from "./spring/Spring1.js";
import Spring2 from "./spring/Spring2/Spring2.js";
import Spring3 from "./spring/Spring3.js";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Spring3 /> */}
      {/* <TouchableComponent /> */}
      <Challenge5Component />
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
