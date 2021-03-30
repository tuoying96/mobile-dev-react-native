import React, { Component } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { ActivityIndicator } from "react-native";
import { Camera } from "expo-camera";
import { PushNotificationIOS } from "react-native";
import * as FaceDetector from "expo-face-detector";

export default class ImagePickerComponent extends Component {
  state = {
    image: null,
    tyle: Camera.Constants.Type.back,
    isCameraVisible: false,
    faceDetected: false,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permission.CAMERA_ROLL);
      if (status !== "gramted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status !== "granted") {
      console.log("@camera", camera);
      alert("Sorry, we need camera  permission to make this work!");
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log("@result", result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
    }
  };

  showCameraView = () => {
    this.setState({
      isCameraVisible: true,
    });
  };

  takePicture = async () => {
    if (this.camera) {
      if (!this.state.faceDetected) {
        alert("No face detected!");
      }
      this.shootIt();
    }
  };

  handleFacesDetected = async ({ faces }) => {
    console.log("@faces", faces);
    console.log(faces.length);
    if (faces.length > 0) {
      this.setState({
        faceDetected: true,
      });
      this.shootIt();
    }
  };

  shootIt = async () => {
    let photo = await this.camera.takePictureAsync();
    this.setState({
      isCameraVisible: false,
      image: photo.uri,
    });
  };

  render() {
    let { image } = this.state;
    // console.log("@image", image);
    const { isCameraVisible } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {!isCameraVisible && (
          <View>
            <Button title="Use Camera" onPress={this.showCameraView} />
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
            />
            {!image && <ActivityIndicator />}
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        )}

        {/* https://docs.expo.io/versions/latest/sdk/facedetector/#event-shape */}

        {isCameraVisible && (
          <Camera
            style={{ width: 300, height: 400 }}
            type={this.state.type}
            ref={(cam) => {
              this.camera = cam;
            }}
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast,
              detectLandmarks: FaceDetector.Constants.Mode.none,
              runClassifications: FaceDetector.Constants.Mode.node,
            }}
          >
            <Button
              title="Switch Camera"
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                });
              }}
            />
            <Button
              title="Take a Picture"
              onPress={this.takePicture.bind(this)}
            />
          </Camera>
        )}
      </View>
    );
  }
}
