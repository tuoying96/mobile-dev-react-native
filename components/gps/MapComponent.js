import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 39.1385084,
        latitudeDelta: 0.27291,
        longitude: -84.52539019999999,
        longitudeDelta: 0.26148,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    console.log(region);
    this.setState({
      region,
    });
  }

  render() {
    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        style={styles.map}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
