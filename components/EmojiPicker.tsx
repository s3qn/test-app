import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

export default function EmojiPicker({ isVisible, children, onClose}: Props) {

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} style={styles.title}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({

    modalContent: {
        height: "50%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },

    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        color: "#fff",
        fontSize: 20,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
})
