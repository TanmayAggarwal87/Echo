import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { songs } from "../libs/songs";
import { usePlayerStore } from "../libs/store.js";

export default function Home() {
  const { playSong, toggleFavourite, favourites } = usePlayerStore();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-3">
        <View className="text-5xl font-bold mb-4">
            <Text>All Songs</Text>
        </View>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isFav = favourites.some((s) => s.id === item.id);
          return (
            <TouchableOpacity
              onPress={() => {
                playSong(item);
                router.push(`/${item.id}`);
              }}
              className="flex-row items-center p-3 mb-3 rounded-2xl bg-gray-100"
            >
              <Image
                source={{ uri: item.coverImage }}
                className="w-14 h-14 rounded-xl mr-3"
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold">{item.songName}</Text>
                <Text className="text-sm text-gray-600">{item.artist}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleFavourite(item)}>
                <Ionicons
                  name={isFav ? "heart" : "heart-outline"}
                  size={24}
                  color={isFav ? "red" : "black"}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
