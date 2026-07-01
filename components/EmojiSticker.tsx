import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type Props = {
    imgSize: number;
    stickerSource: string;
};

export default function EmojiSticker({imgSize, stickerSource}: Props) {
    
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const scaleImage = useSharedValue(imgSize);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imgSize * 2) {
                scaleImage.value = imgSize * 2;
            } else {
                scaleImage.value = Math.round(imgSize * 0.5);
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    
    const drag = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    });


    return (
        <GestureDetector gesture={drag}>    
            <Animated.View style={[containerStyle, {top: -350}]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                        source={stickerSource as ImageSourcePropType}
                        resizeMode={"contain"} 
                        style={[{width: imgSize, height: imgSize}, imageStyle]} 
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}