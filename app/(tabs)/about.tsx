import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={bust_app.container}
    >
      <Text style={bust_app.text}>Who is rarri la flexiana you may ask!</Text>
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