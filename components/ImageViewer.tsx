import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
    imgSauce: string;
};

export default function ImageViewer({ imgSauce }: Props) {
    return <Image source={imgSauce} style={bust_app.image} />
}

const bust_app = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})