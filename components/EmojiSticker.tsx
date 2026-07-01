import { Image } from "expo-image";
import { View } from "react-native";

type Props = {
    imgSize: number;
    stickerSource: string;
};

export default function EmojiSticker({imgSize, stickerSource}: Props) {
    return (
        <View style={{ top: -150, left: 100 }}>
            <Image 
            source={stickerSource} 
            style={{width: imgSize, height: imgSize}} 
            />
        </View>
    );
}