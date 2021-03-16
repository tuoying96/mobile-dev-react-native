import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import MainComponent from "./components/MainComponent";
// import BounceComponent from "./components/BounceComponent";
import AllComponment from "./components/AllComponment";
import FadeComponment from "./components/FadeComponment";
// import BlockComponet from "./components/BlockComponent";
// import ImageComponet from "./components/ImageComponet";
// import CircleComponment from "./components/CircleComponment";
// import SwipComponment from "./components/SwipComponment";
import BallComponment from "./components/BallComponment";

export default function App() {
  return (
    <View style={styles.container}>
      <BallComponment />
      {/* <BounceComponent />
      <MainComponent /> */}
      <StatusBar style="auto" />
      {/* <AllComponment /> */}
      {/* <FadeComponment /> */}
      {/* <CircleComponment /> */}
      {/* <SwipComponment /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    alignItems: "center",
    justifyContent: "center",
  },
});
