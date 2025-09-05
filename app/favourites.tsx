import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePlayerStore } from "../libs/store.js";

export default function Favourites() {
  const { favourites, playSong } = usePlayerStore();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-3">
      <Text className="text-2xl font-bold mb-4">Favourites</Text>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              playSong(item);
              router.push(`/${item.id}`);
            }}
            className="flex-row items-center p-3 mb-3 rounded-2xl bg-blue-100"
          >
            <Image
              source={{ uri: item.coverImage }}
              className="w-14 h-14 rounded-xl mr-3"
            />
            <View>
              <Text className="text-lg font-semibold">{item.songName}</Text>
              <Text className="text-sm text-gray-600">{item.artist}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
