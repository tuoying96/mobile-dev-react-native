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

  moveToCurr() {
    let newRegion = {
      latitude: this.state.latitude,
      latitudeDelta: LATITUDE_DELTA,
      longitude: this.state.longitude,
      longitudeDelta: LONGITUDE_DELTA,
    };
    console.log("@newRegion", newRegion);

    this.mapRef.animateToRegion(newRegion, 3000);
  }

  animateExplore() {
    let inputRegion = {
      latitude: this.state.exploreLatitude,
      latitudeDelta: LATITUDE_DELTA,
      longitude: this.state.exploreLongitude,
      longitudeDelta: LONGITUDE_DELTA,
    };
    console.log("@inputRegion: ", inputRegion);

    this.mapRef.animateToRegion(inputRegion, 3000);
  }

  contains(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].latitude === val.latitude &&
        arr[i].longitude === val.longitude
      ) {
        return 1;
      }
    }
    return -1;
  }

  onRegionChangeComplete(region) {
    this.setState({
      region,
    });
    // console.log(this.state.region);
  }

  addMarker(e) {
    console.log("add marker");
    // console.log(e.nativeEvent.coordinate);
    // console.log("@@", e.nativeEvent.coordinate.latitude);
    let addPos = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    console.log("before markers", this.state.markers);
    this.setState({
      markers: [...this.state.markers, addPos],
    });
    console.log("markers", this.state.markers);
  }

  removeMarker() {
    console.log("addMarker remove marker");
  }

  addCurrMarker(region) {
    console.log("add curr marker");
    // 临时的
    // this.setState({ addLatitude: this.state.latitude });
    // this.setState({ addLongitude: this.state.longitude });
    this.setState({ addLatitude: this.state.region.latitude });
    this.setState({ addLongitude: this.state.region.longitude });

    // let addPos = {
    //   latitude: this.state.addLatitude,
    //   longitude: this.state.addLongitude,
    // };
    let addPos = {
      latitude: region.latitude,
      longitude: region.longitude,
    };

    /// use set
    // newMarker.add(addPos);

    // use array
    if (this.contains(this.state.markers, addPos) === -1) {
      this.setState({ markers: [...this.state.markers, addPos] });
    }

    console.log("@markers:", this.state.markers);
  }

  remove(arr, val) {
    let i = arr.indexOf(val);
    arr.splice(i, 1);
  }

  removeCurrMarker() {
    console.log("remove curr marker");
    this.setState({ removeLatitude: this.state.latitude });
    this.setState({ removeLongitude: this.state.longitude });

    let newMarker = this.state.markers;
    let removePos = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    };
    console.log("removeLatitude", removePos.latitude);

    /// use set
    // for (let item of newMarker) {
    //   if (
    //     item.latitude === removePos.latitude &&
    //     item.longitude === removePos.longitude
    //   ) {
    //     newMarker.delete(item);
    //     break;
    //   }
    // }

    /// use array
    this.remove(newMarker, removePos);
    this.setState({ markers: newMarker });
    console.log(this.state.markers);
  }

  fitAllMarker() {
    console.log("fitAllMarker");
    let markersID = [];
    for (let i = 0; i < this.state.markers.length; i++) {
      console.log(i.toString());
      markersID.push(i.toString());
    }
    console.log("markersID:", markersID);
    this.mapRef.fitToSuppliedMarkers(markersID, {
      edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
      animated: true,
    });
  }
  getRandomColor = () => {
    return (
      "rgba(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

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
          provider={this.props.provider}
          ref={(ref) => {
            this.mapRef = ref;
          }}
          // region={this.state.region}
          initialRegion={this.state.region}
          // onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
          onPress={(e) => this.addMarker(e)}
        >
          {/* {this.state.markers.forEach(function (value) {
            console.log(value);
          })} */}

          {this.state.markers.map((marker, index) => (
            // console.log(index),
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              anchor={{ x: 0.5, y: 0.5 }}
              identifier={index.toString()}
              // title={marker.title}
              // description={marker.description}
            />
          ))}
          <Marker
            pinColor={this.getRandomColor()}
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            // onSelect={(e) => log("onSelect", e)}
            // onDrag={(e) => log("onDrag", e)}
            // onDragStart={(e) => log("onDragStart", e)}
            // onDragEnd={(e) => log("onDragEnd", e)}
            // onPress={(e) => log("onPress", e)}
            // draggable
            // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
            title="Now"
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
          <View style={styles.row}>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.moveToCurr()}
              title="My current Location"
            ></Button>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.animateExplore()}
              title="Move into the input location"
            ></Button>
          </View>
          <Button
            style={{ fontSize: 20, color: "green" }}
            styleDisabled={{ color: "red" }}
            // onPress={() => this.mapRef.fitToSuppliedMarkers(this.state.markers)}
            onPress={() => this.fitAllMarker()}
            title="Fit All Markers"
          ></Button>
          <View style={styles.row}>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.addCurrMarker(this.state.region)}
              title="Add Curr Marker"
            ></Button>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.removeCurrMarker()}
              title="Remove Curr Marker"
            ></Button>
          </View>
          <View style={styles.row}>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              // onPress={() => this.addMarker()}
              title="Add Marker"
            ></Button>
            <Button
              style={{ fontSize: 20, color: "green" }}
              styleDisabled={{ color: "red" }}
              onPress={() => this.removeMarker()}
              title="Remove Marker"
            ></Button>
          </View>
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
