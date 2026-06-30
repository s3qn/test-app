import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require("/home/sean/app-projects/test-app/assets/images/japanese_bg.png")


export default function Index() {
  return (
    <View style={bust_app.container}>
      <View style={bust_app.imageContainer}>
        <ImageViewer imgSauce={PlaceHolderImage}/>
      </View>

      <View style={bust_app.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
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