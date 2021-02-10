import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, View, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default class SwitchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: this.props.rotation,
      pic: this.props.pic,
      size: this.props.size,
    };
  }
  static defaultProps = {
    rotation: false,
    pic: "https://picsum.photos/200/230",
    size: 100,
  };

  render() {
    let rotateDegrees = this.state.rotation ? "180deg" : "0deg";
    return (
      <View>
        <Text>Show the image? : {this.state.rotation}</Text>
        <Switch
          value={this.state.rotation}
          onValueChange={(e) =>
            this.setState({
              rotation: e,
            })
          }
        />
        <Text>
          Resize the image？ {this.state.size}
          {"%"}
        </Text>

        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={25}
          maximumValue={200}
          step={25}
          size={this.state.size}
          onValueChange={(size) => this.setState({ size })}
          minimumTrackTintColor="#FFFF00"
          maximumTrackTintColor="#FF0000"
        />

        <Text>Image no?</Text>

        <Picker
          selectedValue={this.state.pic}
          // style={{ height: 50, width: 100 }}
          onValueChange={(ePic) =>
            this.setState({
              pic: ePic,
            })
          }
        >
          <Picker.Item
            label="First"
            value="https://picsum.photos/id/1/200/230"
          />
          <Picker.Item
            label="Second"
            value="data:image/jpeg;base64,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"
          />
          <Picker.Item
            label="Third"
            value="https://picsum.photos/id/2/200/230"
          />
        </Picker>

        <Image
          source={{ uri: this.state.pic }}
          style={{
            width: (200 * this.state.size) / 100,
            height: (230 * this.state.size) / 100,
            transform: [{ rotate: rotateDegrees }],
          }}
        />
      </View>
    );
  }
}
