import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SimpleComponent1 from "./components/SimpleComponent1";
import TextInputComponent from "./components/TextInputComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInputComponent />
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
