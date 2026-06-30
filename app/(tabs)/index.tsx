import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


const PlaceHolderImage = require("/home/sean/app-projects/test-app/assets/images/japanese_bg.png")


export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select an image.")
    }
  };

  return (
    <View style={bust_app.container}>
      <View style={bust_app.imageContainer}>
        <ImageViewer imgSauce={selectedImage || PlaceHolderImage}/>
      </View>

      <View style={bust_app.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>

    </View>
  );
}

const bust_app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    justifyContent: "center",
    alignItems: "center",

  },
  imageContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1 / 4,
    alignItems: "center",
  }
})