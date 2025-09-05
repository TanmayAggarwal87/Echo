import { Audio } from "expo-av";
import { create } from "zustand";
import { songs } from "./songs";

export const usePlayerStore = create((set, get) => ({
  currentSong: null,
  sound: null,
  isPlaying: false,
  position: 0,
  duration: 0,
  favourites: [],

  playSong: async (song) => {
    const { sound } = get();
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound, status } = await Audio.Sound.createAsync(song.fileAddress, {
      shouldPlay: true,
    });
    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        set({
          position: status.positionMillis / 1000,
          duration: status.durationMillis / 1000,
          isPlaying: status.isPlaying,
        });
        if (status.didJustFinish) {
          get().playNext();
        }
      }
    });
    set({ sound: newSound, currentSong: song });
  },

  togglePlayPause: async () => {
    const { sound, isPlaying } = get();
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
      set({ isPlaying: false });
    } else {
      await sound.playAsync();
      set({ isPlaying: true });
    }
  },

  playNext: () => {
    const { currentSong } = get();
    if (!currentSong) return;
    const index = songs.findIndex((s) => s.id === currentSong.id);
    const next = songs[(index + 1) % songs.length];
    get().playSong(next);
  },

  playPrev: () => {
    const { currentSong } = get();
    if (!currentSong) return;
    const index = songs.findIndex((s) => s.id === currentSong.id);
    const prev = songs[(index - 1 + songs.length) % songs.length];
    get().playSong(prev);
  },

  seekTo: async (seconds) => {
    const { sound } = get();
    if (sound) {
      await sound.setPositionAsync(seconds * 1000);
    }
  },

  toggleFavourite: (song) => {
    const { favourites } = get();
    const exists = favourites.some((s) => s.id === song.id);
    if (exists) {
      set({ favourites: favourites.filter((s) => s.id !== song.id) });
    } else {
      set({ favourites: [...favourites, song] });
    }
  },


}));
