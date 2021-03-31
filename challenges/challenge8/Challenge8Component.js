import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Button } from "react-native";
import MapView, { Overlay } from "react-native-maps";
import * as Permissions from "expo-permissions";
import { TextInput } from "react-native-gesture-handler";

export default class Challenge8Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "unknow",
      longitude: "unknow",
      locationPermission: "unknow",

      exploreLatitude: "unknow",
      exploreLongitude: "unknow",

      region: {
        latitude: 40.7831,
        latitudeDelta: 0.2729186541296684,
        longitude: -73.9712,
        longitudeDelta: 0.26148553937673924,
      },
    };

    this.onRegionChange = this.onRegionChange.bind(this);
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
    // console.log("@newRegion", newRegion);

    this.setState({
      region: newRegion,
    });
    console.log("@newRegion", this.state.region);
  }
  btnPressAnimate() {
    const region = this.state.region;
    console.log(
      this.state.exploreLatitude
      // +
      //   Math.random() * 10 * (region.latitudeDelta / 2)
    );

    let inputRegion = {
      latitude:
        this.state.exploreLatitude +
        Math.random() * 10 * (this.state.region.latitudeDelta / 2),
      latitudeDelta: 0.2729186541296684,
      longitude:
        this.state.exploreLongitude +
        Math.random() * 10 * (this.state.region.longitudeDelta / 2),
      longitudeDelta: 0.26148553937673924,
    };
    console.log("@inputRegion: ", inputRegion);

    // this.setState({
    //   region: inputRegion,
    // });

    return {
      latitude:
        this.state.exploreLatitude +
        Math.random() * 10 * (this.state.region.latitudeDelta / 2),
      longitude:
        this.state.exploreLongitude +
        Math.random() * 10 * (this.state.region.longitudeDelta / 2),
    };
  }

  animateExplore() {
    // this.handleExplore();
    this.map.animateToRegion(this.exploreRegion(), 2000);
  }

  exploreRegion() {
    return {
      ...this.state.region,
      ...this.btnPressAnimate(),
    };
  }
  onRegionChange(region) {
    console.log(region);
    this.setState({
      region,
    });
  }

  // handleExplore = () => {
  //   const region = this.state.region;

  //   let inputRegion = {
  //     latitude:
  //       this.state.exploreLatitude +
  //       Math.random() * 10 * (this.state.region.latitudeDelta / 2),
  //     latitudeDelta: 0.2729186541296684,
  //     longitude:
  //       this.state.exploreLongitude +
  //       Math.random() * 10 * (this.state.region.longitudeDelta / 2),
  //     longitudeDelta: 0.26148553937673924,
  //   };

  //   this.setState({
  //     region: inputRegion,
  //   });

  //   console.log("current region", this.state.region);
  // };

  onRegionChange(region) {
    this.setState({
      region,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={(ref) => {
            this.map = ref;
          }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
          style={styles.map}
        />

        {/* </MapView> */}
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "70%", //for center align
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "80%", //for center align
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
                // this.handleExplore()
              )
            }
            value={this.state.input}
          />
          <TextInput
            style={styles.input}
            placeholder={"🔍  Explore the longitude"}
            onChangeText={
              (e) =>
                this.setState(
                  {
                    exploreLongitude: e,
                  },
                  console.log(e)
                  // this.handleExplore()
                )
              // console.log("alala")
            }
            value={this.state.input}
          />
          <Button
            style={{ fontSize: 20, color: "green" }}
            styleDisabled={{ color: "red" }}
            onPress={this.btnPress.bind(this)}
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
    // paddingHorizontal: 2,
    // paddingVertical: 5,
    marginBottom: "2%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
