import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default class SecondScreen extends Component {
  render() {
    const { route, navigation } = this.props;
    const { picId } = route.params;
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Image
          source={{
            uri: "https://picsum.photos/id/" + picId + "/200/200",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Button
          title="Refresh me"
          onPress={() => {
            navigation.push("Second", {
              picId: Math.floor(Math.random() * 500),
            });
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        {/* <Button
          title="Go to Third"
          onPress={() => navigation.navigate("Third")}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});
