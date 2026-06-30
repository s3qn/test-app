import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
  return (
<>
  <StatusBar style="light" />
  <Tabs
    screenOptions={{
        tabBarActiveBackgroundColor: "#25292e",
        tabBarActiveTintColor: "red",
        headerStyle: {
            backgroundColor: "#25292e"
        },
        headerShadowVisible: true,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#25292e"
        },
    }}
  >
    <Tabs.Screen 
      name="index" 
      options={{
        headerTitle: "The Bustdown",
        title: "Index",
        tabBarIcon: ({focused, color}) => 
            (<Ionicons 
                name={focused ? "home" : "home-outline"} 
                size={30} 
                color={color}
                />
            ),
    }}/>
    <Tabs.Screen
     name="about"
     options={{
        headerTitle: "Who am I?",
        title: "About",
        tabBarIcon: ({focused, color}) => 
            (<Ionicons 
                name={focused ? "person" : "person-outline"} 
                size={30} 
                color={color}
                />
            ),      
     }}/>
    <Tabs.Screen
      name="+not-found"
      options={{}}/>
  </Tabs>
</>
  )
}