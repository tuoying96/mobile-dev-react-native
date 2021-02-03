import React, { Component } from "react";
import { TextInput, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default class TextInputComponent extends Component {
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
      <View>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder="Please provide the id of a new image"
          value={this.state.value}
          onSubmitEditing={(event) =>
            this.setState({
              pic:
                "https://picsum.photos/id/" +
                event.nativeEvent.text +
                "/200/230",
            })
          }
        />
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
