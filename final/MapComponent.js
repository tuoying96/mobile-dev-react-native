import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import MapView, { Marker, ProviderPropType, UrlTile } from "react-native-maps";
import * as Permissions from "expo-permissions";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "react-native-elements";

let markers = new Set();
const { width, height } = Dimensions.get("window");
const LATITUDE_DELTA = 0.2729186541296684;
const LONGITUDE_DELTA = 0.26148553937673924;
const VAN_LATITUDE = 49.2853442;
const VAN_LONGITUDE = -123.1124645;

const ASPECT_RATIO = width / height;
function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}
export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRef: null,
      latitude: "unknow",
      longitude: "unknow",
      locationPermission: "unknow",

      currPosition: "",

      exploreLatitude: "unknow",
      exploreLongitude: "unknow",

      addLatitude: "40.7831",
      addLongitude: "-73.9712",

      removeLatitude: "unknow",
      removeLongitude: "unknow",

      region: {
        latitude: 40.7831,
        latitudeDelta: LATITUDE_DELTA,
        longitude: -73.9712,
        longitudeDelta: LONGITUDE_DELTA,
      },

      curr_region: {},

      van_region: {
        latitude: VAN_LATITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitude: VAN_LONGITUDE,
        longitudeDelta: LONGITUDE_DELTA,
      },
      addCurr: true,
      addVan: true,
      VanMarker: false,
      CurrMarker: false,
      markers: [],
      addRegion: [],
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
          curr_region: {
            latitude: position.coords.latitude,
            latitudeDelta: LATITUDE_DELTA,
            longitude: position.coords.longitude,
            longitudeDelta: LONGITUDE_DELTA,
          },
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

  onRegionChangeComplete(region) {
    this.setState({
      region,
    });
  }

  handleVan() {
    console.log("before handleVan", this.state.VanMarker);
    this.setState({ VanMarker: !this.state.VanMarker });

    console.log("after handleVan", this.state.VanMarker);
  }
  handleCurr() {
    console.log("before handleVan", this.state.addCurr);
    this.setState({ CurrMarker: !this.state.CurrMarker });

    console.log("after handleVan", this.state.addCurr);
  }

  fitAllMarker() {
    console.log("fitAllMarker");
    let markersID = [];
    if (this.state.VanMarker) {
      markersID.push("van");
    }
    if (this.state.CurrMarker) {
      markersID.push("curr");
    }

    console.log("markersID:", markersID);
    this.mapRef.fitToSuppliedMarkers(markersID, {
      edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
      animated: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={(ref) => {
            this.mapRef = ref;
          }}
          initialRegion={this.state.region}
          // onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
        >
          {this.state.VanMarker ? (
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: this.state.van_region.latitude,
                longitude: this.state.van_region.longitude,
              }}
              title="Now"
              anchor={{ x: 0.5, y: 0.5 }}
              identifier="van"
            />
          ) : (
            <Text>""</Text>
          )}
          {this.state.CurrMarker ? (
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: this.state.curr_region.latitude,
                longitude: this.state.curr_region.longitude,
              }}
              title="Now"
              anchor={{ x: 0.5, y: 0.5 }}
              identifier="curr"
            />
          ) : (
            <Text>""</Text>
          )}
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
          <View style={styles.row}>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.handleVan()}
              title="Add/Remove VAN Marker"
            ></Button>
          </View>
          <View style={styles.row}>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.handleCurr()}
              title="Add/Remove Curr Marker"
            ></Button>
          </View>
          <Button
            style={{ fontSize: 20, color: "green" }}
            styleDisabled={{ color: "red" }}
            onPress={() => this.fitAllMarker()}
            title="Fit All Markers"
          ></Button>
        </View>
      </View>
    );
  }
}

MapComponent.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
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
