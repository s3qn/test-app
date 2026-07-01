import { useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emojis] = useState<ImageSourcePropType[]>([
    require("../assets/emojis/Alien-A--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Alien-B--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Alien-Monster--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Angry-Face--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Angry-Face-With-Horns--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Anguished-Face--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Anxious-Face-With-Sweat--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Astonished-Face--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Baby--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Baby-Angel--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Backhand-Index-Pointing-Down--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Backhand-Index-Pointing-Left--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Backhand-Index-Pointing-Right--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Backhand-Index-Pointing-Up--Streamline-Kawaii-Emoji.png"),
    require("../assets/emojis/Bald-Hair--Streamline-Kawaii-Emoji.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
