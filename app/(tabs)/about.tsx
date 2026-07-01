import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={bust_app.container}
    >
      <Text style={bust_app.text}>This is a test application! if you see this then guess what! everything is working!</Text>
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
  text: {
    color: "red",
  }



})