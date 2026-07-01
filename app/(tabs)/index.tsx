import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { captureRef } from "react-native-view-shot";

const PlaceHolderImage = require("/home/sean/app-projects/test-app/assets/images/japanese_bg.png")


export default function Index() {
  const imageRef = useRef(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  useEffect(() => {
    if (permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true)
      console.log(result);
    } else {
      alert("You did not select an image.")
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={bust_app.container}>
      <View ref={imageRef} collapsable={false} style={{}}>
        <ImageViewer imgSauce={selectedImage || PlaceHolderImage}/>
        { pickedEmoji && (
          <EmojiSticker imgSize={100} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
          <View style={bust_app.optionsContainer}>
            <View style={bust_app.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
                />
            </View>
          </View>
      ): (
      
      <View style={bust_app.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
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
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
})
