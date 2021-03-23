import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import ImagePickerComponent from "./components/camera/ImagePickerComponent";
import FlatListComponent from "./components/camera/FlatListComponent";
import FetchComponent from "./components/camera/FetchComponent";

// import Spring0 from "./spring/Spring0.js";
// import Spring1 from "./spring/Spring1.js";
// import Spring2 from "./spring/Spring2/Spring2.js";
// import Spring3 from "./spring/Spring3.js";
// import Spring4 from "./spring/Spring4/Spring4.js";
// import Spring5 from "./spring/Spring5/Spring5.js";
// import Spring6 from "./spring/Spring6/Spring6.js";

// import ExampleView from "./midterm/ExampleView.js";
// import DraggableBox from "./midterm/DraggableBox.js";
// import PinchableBox from "./midterm/PinchableBox";
// import RnGestureHandler from "./midterm/RnGestureHandler";
// import FadeInView from "./midterm/FadeInView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <ImagePickerComponent />
      <FlatListComponent />
      <FetchComponent />
    </View>

    // routing
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={HomeScreen.navigationOptions}
    //     />
    //     <Stack.Screen name="Second" component={SecondScreen} />
    //     <Stack.Screen name="Third" component={ThirdScreen} />
    //     <Stack.Screen name="Modal" component={ModalScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
