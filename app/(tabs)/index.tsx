import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={bust_app.container}
    >
      <Text style={bust_app.text}>The best app ever!!!</Text>
      <Link 
        href={"/about"}
        style={bust_app.button}>
          Go To About Screen
      </Link>

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
    color: "white",
  },
  button: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 20,
  }



})