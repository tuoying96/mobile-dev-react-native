import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Challenge3Component from "./components/Challenge3Component";

export default function App() {
  return (
    <View style={styles.container}>
      <Challenge3Component />
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
