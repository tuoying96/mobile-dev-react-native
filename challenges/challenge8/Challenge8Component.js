import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import { TextInput } from "react-native-gesture-handler";

export default class Challenge8Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "unknow",
      longitude: "unknow",
      locationPermission: "unknow",

      currPosition: "",

      exploreLatitude: "unknow",
      exploreLongitude: "unknow",

      region: {
        latitude: 40.7831,
        latitudeDelta: 0.2729186541296684,
        longitude: -73.9712,
        longitudeDelta: 0.26148553937673924,
      },
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    // this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    this._getLocationPermissions();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        console.log(
          "My position: " +
            position.coords.latitude +
            ", " +
            position.coords.longitude
        );
        this.setState({
          currPosition: position,
        });

        this.setState({
          latitude: position.coords.latitude,
        });
        this.setState({
          longitude: position.coords.longitude,
        });
        this.setState({
          exploreLatitude: position.coords.latitude,
        });
        this.setState({
          exploreLongitude: position.coords.longitude,
        });
      },
      (error) => alert(JSON.stringify(error))
    );
  }
  _getLocationPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationPermission: false,
      });
    } else {
      this.setState({
        locationPermission: true,
      });
    }
  };

  btnPress() {
    let newRegion = {
      latitude: this.state.latitude,
      latitudeDelta: 0.2729186541296684,
      longitude: this.state.longitude,
      longitudeDelta: 0.26148553937673924,
    };
    console.log("@newRegion", newRegion);

    this.map.animateToRegion(newRegion, 3000);
  }

  animateExplore() {
    let inputRegion = {
      latitude: this.state.exploreLatitude,
      latitudeDelta: 0.2729186541296684,
      longitude: this.state.exploreLongitude,
      longitudeDelta: 0.26148553937673924,
    };
    console.log("@inputRegion: ", inputRegion);

    this.map.animateToRegion(inputRegion, 3000);
  }

  onRegionChangeComplete(region) {
    this.setState({
      region,
    });
    console.log(this.state.region);
  }

  // onRegionChange(region) {
  //   this.setState({
  //     region,
  //   });
  //   console.log(this.state.region);
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={(ref) => {
            this.map = ref;
          }}
          // region={this.state.region}
          initialRegion={this.state.region}
          // onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        </MapView>

        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "10%", //for center align
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#aaa",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              marginBottom: "5%",
            }}
          >
            My current position:
          </Text>
          <Text
            style={{
              color: "#aaa",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              marginBottom: "5%",
            }}
          >
            {this.state.region.latitude}, {this.state.region.longitude}
          </Text>
        </View>
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "70%", //for center align
            alignSelf: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder={"🔍  Explore the latitude"}
            onChangeText={(e) =>
              this.setState(
                {
                  exploreLatitude: e,
                },
                console.log(e)
              )
            }
            value={this.state.input}
          />
          <TextInput
            style={styles.input}
            placeholder={"🔍  Explore the longitude"}
            onChangeText={(e) =>
              this.setState(
                {
                  exploreLongitude: e,
                },
                console.log(e)
              )
            }
            value={this.state.input}
          />
          <Button
            style={{ fontSize: 20, color: "green" }}
            styleDisabled={{ color: "red" }}
            onPress={() => this.btnPress()}
            title="My current Location"
          ></Button>
          <Button
            style={{ fontSize: 20, color: "green" }}
            styleDisabled={{ color: "red" }}
            onPress={() => this.animateExplore()}
            title="Move into the input location"
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    marginBottom: "2%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
