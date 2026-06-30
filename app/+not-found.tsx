import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Oops!" }} />
      <View style={bust_app.container}>
        <Text style={bust_app.text}>404 — This page doesn't exist.</Text>
        <Link href={"/"} style={bust_app.button}>
          Go To Home Screen
        </Link>
      </View>
    </>
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
  },
});
