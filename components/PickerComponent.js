import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default class PickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: this.props.pic,
    };
  }
  static defaultProps = {
    pic: "https://picsum.photos/200/230",
  };

  render() {
    return (
      <View style={{ width: 250 }}>
        <Text>Image no?</Text>
        <Text>{this.state.value}</Text>

        <Picker
          selectedValue={this.state.value}
          style={{ height: 50, width: 100 }}
          onValueChange={(pic) =>
            this.setState({
              pic: pic,
            })
          }
        >
          <Picker.Item label="First" pic="https://picsum.photos/id/1/200/230" />
          <Picker.Item
            label="Second"
            pic="https://picsum.photos/id/2/200/230"
          />
          <Picker.Item label="Third" pic="https://picsum.photos/200/230" />
        </Picker>

        <Image
          source={{ uri: this.state.pic }}
          style={{
            width: 200,
            height: 230,
          }}
        />
      </View>
    );
  }
}
