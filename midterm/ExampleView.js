import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Text,
  // View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { View } from "react-native-animatable";

const showAnimation = "fadeInLeftBig";
const hideAnimation = "fadeOutUp";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  subContainer: {
    flexDirection: "column",
    flex: 1,
  },
  img: {
    flex: 1,
    width: 70,
    height: 230,
  },
  text1: { color: "#FF8587" },
  text2: { color: "#F1E3A7" },
  text3: { color: "#A0BAB8" },
});

export default class ExampleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      anim: false,
      pic1: "https://picsum.photos/id/10/50/230",
      pic2: "https://picsum.photos/id/2/50/230",
      pic3: "https://picsum.photos/id/30/50/230",
    };
  }
  toggle = () => {
    if (!this.state.show) {
      this.setState({
        show: true,
        anim: true,
        pic1: "https://picsum.photos/id/10/50/230",
      });
    } else {
      this.setState({
        anim: false,
        pic1: null,
      });
      setTimeout(
        () =>
          this.setState({
            show: false,
          }),
        500
      );
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.show && (
          <Animatable.View
            animation={this.state.anim ? showAnimation : hideAnimation}
          >
            <Image
              style={{ width: 70, height: 230 }}
              source={{
                uri: this.state.pic1,
              }}
            />
            {/* <Image
              style={{ width: 70, height: 230 }}
              source={{
                uri: this.state.pic2,
              }}
            />
            <Image
              style={{ width: 70, height: 230 }}
              source={{
                uri: this.state.pic3,
              }}
            /> */}
          </Animatable.View>
        )}
        <View>
          {!this.state.show ? (
            <Icon
              name="add"
              type="MaterialIcons"
              reverse
              size={28}
              color="#F24E29"
              underlayColor="white"
              raised
              onPress={this.toggle}
            />
          ) : (
            <Icon
              name="clear"
              type="MaterialIcons"
              reverse
              size={28}
              color="#43266E"
              underlayColor="white"
              raised
              onPress={this.toggle}
            />
          )}
        </View>

        <Animatable.Text animation="zoomInUp">
          Zoom me up, Scotty
        </Animatable.Text>

        {/* <Animatable.Text
          animation="slideInDown"
          iterationCount={5}
          direction="alternate"
        >
          Up and down you go
        </Animatable.Text>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center" }}
        >
          ❤️
        </Animatable.Text> */}

        {/* <TouchableOpacity
          onPress={() =>
            this.setState({ fontSize: (this.state.fontSize || 10) + 5 })
          }
        >
          <Animatable.Text
            transition="fontSize"
            style={{ fontSize: this.state.fontSize || 10 }}
          >
            Size me up, Scotty
          </Animatable.Text>
        </TouchableOpacity> */}

        {/* <TouchableWithoutFeedback onPress={this.bounce}>
          <Animatable.View ref={this.handleViewRef}>
            <Text>Bounce me!</Text>
          </Animatable.View>
        </TouchableWithoutFeedback> */}
      </View>
    );
  }
}
