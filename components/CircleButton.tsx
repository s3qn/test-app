import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
    onPress: () => void;
};

export default function CircleButton({onPress}: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={({ pressed }) => [
                styles.circleButton,
                {opacity: pressed? 0.75 : 1}]} 
                onPress={onPress}
            >
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 2,
        borderRadius: 42,
        borderColor: "red",
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor:"#fff",
    },
})