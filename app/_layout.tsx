import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import "./global.css";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "gray",
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.8} />
        ),
      }}
    >
      {/* Home / Now Playing tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Now Playing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes" size={size} color={color} />
          ),
        }}
      />

      {/* Favourites tab */}
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="[id]/index"
        options={{
          tabBarLabel: "Now Playing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="accessibility" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
