import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  Alert,
  _ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

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
const alertMessage = "Which picture you would like to Hide/Show?";
class Challenge5Component extends Component {
  constructor() {
    super();
    this.state = {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      pic1: "https://picsum.photos/id/10/50/230",
      pic2: "https://picsum.photos/id/2/50/230",
      pic3: "https://picsum.photos/id/30/50/230",
    };
  }

  btnPress() {
    Alert.alert("Hide/Show pictures", alertMessage, [
      {
        text: "Picture 1",
        onPress: () =>
          this.setState({
            toggle1: !this.state.toggle1,
            pic1: this.state.toggle1
              ? null
              : "https://picsum.photos/id/10/50/230",
          }),
      },
      {
        text: "Picture 2",
        onPress: () =>
          this.setState({
            toggle2: !this.state.toggle2,
            pic2: this.state.toggle2
              ? null
              : "https://picsum.photos/id/2/50/230",
          }),
      },
      {
        text: "Picture 3",
        onPress: () =>
          this.setState({
            toggle3: !this.state.toggle3,
            pic3: this.state.toggle3
              ? null
              : "https://picsum.photos/id/30/50/230",
          }),
      },
    ]);
  }

  render() {
    return (
      <View>
        <View style={styles.mainContainer}>
          {/* the first pictures and button */}
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 70, height: 230 }}
                source={{
                  uri: this.state.pic1,
                }}
              />
            </TouchableOpacity>

            <TouchableHighlight
              underlayColor="#FF8587"
              onPress={() =>
                this.setState({
                  toggle1: !this.state.toggle1,
                  pic1: this.state.toggle1
                    ? null
                    : "https://picsum.photos/id/10/50/230",
                })
              }
            >
              <Text style={styles.text1}>Hide/Show</Text>
            </TouchableHighlight>
          </View>

          {/* the second pictures and button */}
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 70, height: 230 }}
                source={{
                  uri: this.state.pic2,
                }}
              />
            </TouchableOpacity>

            <TouchableHighlight
              underlayColor="#F1E3A7"
              onPress={() =>
                this.setState({
                  toggle2: !this.state.toggle2,
                  pic2: this.state.toggle2
                    ? null
                    : "https://picsum.photos/id/2/50/230",
                })
              }
            >
              <Text style={styles.text2}>Hide/Show</Text>
            </TouchableHighlight>
          </View>
          {/* the third pictures and button */}
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 70, height: 230 }}
                source={{
                  uri: this.state.pic3,
                }}
              />
            </TouchableOpacity>

            <TouchableHighlight
              underlayColor="#A0BAB8"
              onPress={() =>
                this.setState({
                  toggle3: !this.state.toggle3,
                  pic3: this.state.toggle3
                    ? null
                    : "https://picsum.photos/id/30/50/230",
                })
              }
            >
              <Text style={styles.text3}>Hide/Show</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Button
          onPress={this.btnPress.bind(this)}
          title="Hide/Show pictures"
          color="#B373B3"
          accessibilityLabel="This is a button"
        />
      </View>
    );
  }
}

export default Challenge5Component;
