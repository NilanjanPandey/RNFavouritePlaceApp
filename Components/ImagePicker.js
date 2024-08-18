import React, { useState } from "react";
import { Alert, Button, View, Image, Text, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../Constants/Colors";

function ImagePicker() {
  const [takenImg, setTakenImg] = useState("");
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  //iOS to verify camera opening permission. This is a async function which ultimately return promise which results in boolean.
  async function verifyPermission() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const premissionResponse = await requestPermission();
      return premissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant camera perission to use the app."
      );
      return false;
    }

    return true;
  }
  //Launch Camera
  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    } else {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });
        // console.log(image.assets[0].uri);
      setTakenImg(image.assets[0].uri);
    }
  }
  let imgPreview = <Text>No Image Taken Yet!</Text>;
  if (takenImg) {
    imgPreview = <Image style={styles.image} source={{ uri: takenImg }} />;
  }
  return (
    <View>
      <View style={styles.imgPreview}>{imgPreview}</View>
      <Button title="Capture" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
const styles = StyleSheet.create({
  imgPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.primary100,
    borderRadius:4
  },
  image:{
    width:'100%',
    height:'100%'
  }
});
