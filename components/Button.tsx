import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    theme?: "primary";
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {


        return (
            <View style={[bust_app.buttonContainer, {
                borderColor: "yellow",
                borderRadius: 18,
                borderWidth: 5,
        
            },
        ]}>

            <Pressable
                style={({ pressed }) => [
                    bust_app.button, {backgroundColor: "#fff",
                    opacity: pressed? 0.75 : 1}
                ]}
                onPress={onPress}
            >
            <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={bust_app.buttonIcon}
            />

                <Text style={[bust_app.buttonLabel, {color:"#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
            <View style={bust_app.buttonContainer}>
                <Pressable
                    style={bust_app.button}
                    onPress={onPress}
                >
                    <Text style={bust_app.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
}


const bust_app = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },

    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    }
})