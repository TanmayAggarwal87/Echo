import Ionicons from "@expo/vector-icons/Ionicons";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePlayerStore } from "../../libs/store.js";

export default function NowPlaying() {
  const {
    currentSong,
    playNext,
    playPrev,
    togglePlayPause,
    isPlaying,
    position,
    duration,
    seekTo,
    fetchLyrics,
    lyrics,
  } = usePlayerStore();
  const [loadingLyrics, setLoadingLyrics] = useState(false);

  if (!currentSong) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text>No song playing</Text>
      </SafeAreaView>
    );
  }

  const formatTime = (secs: number) => {
    if (!secs) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        className="p-5"
      >
        <Image
          source={{ uri: currentSong.coverImage }}
          className="w-72 h-72 rounded-2xl mb-6"
        />
        <Text className="text-2xl font-bold">{currentSong.songName}</Text>
        <Text className="text-lg text-gray-500 mb-6">{currentSong.artist}</Text>

        <View className="w-full">
          <Slider
            value={position}
            minimumValue={0}
            maximumValue={duration || 1}
            onSlidingComplete={(val) => seekTo(val[0])}
            minimumTrackTintColor="#2563eb"
            maximumTrackTintColor="#000"
            thumbTintColor="#2563eb"
            trackStyle={{ height: 4, borderRadius: 2 }}
            style={{ width: "100%", height: 40 }}
          />
          <View className="flex-row justify-between mt-1">
            <Text className="text-sm text-gray-600">
              {formatTime(position)}
            </Text>
            <Text className="text-sm text-gray-600">{formatTime(duration)}</Text>
          </View>
        </View>

        <View className="flex-row justify-around w-full mt-4">
          <TouchableOpacity onPress={playPrev}>
            <Ionicons name="play-skip-back" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause}>
            <Ionicons
              name={isPlaying ? "pause-circle" : "play-circle"}
              size={60}
              color="#2563eb"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={playNext}>
            <Ionicons name="play-skip-forward" size={40} color="black" />
          </TouchableOpacity>
        </View>

       
          <View className="mt-6 bg-blue-200/50 px-2 py-4 rounded-xl">
            <Text className="text-xl font-semibold text-center">{currentSong.lyrics}</Text>
          </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}
