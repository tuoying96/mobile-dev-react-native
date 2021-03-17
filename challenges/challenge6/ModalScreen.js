import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Image
        source={{
          uri:
            "https://picsum.photos/id/" +
            Math.floor(Math.random() * 500) +
            "/200/200",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
