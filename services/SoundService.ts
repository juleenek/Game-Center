import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export const useSoundService = () => {
  const [music, setMusic] = useState<Audio.Sound | null>(null);
  let isPlaying: boolean = false;

  const playMusic = async () => {
    const source = require("../assets/background-music.mp3");
    const { sound } = await Audio.Sound.createAsync(source, {
      shouldPlay: true,
      isLooping: true,
      volume: 0.01, // temporary testing
    });
    setMusic(music);
    if (music !== null) {
      await music.playAsync();
      isPlaying = true;
    } else {
      console.log("Sound not found.");
    }
  };

  const playSound = async () => {};

  const stopSound = async () => {
    if (music !== null) {
      await music.stopAsync();
    } else {
      console.log("Sound not found");
    }
  };

  useEffect(() => {
    return () => {
      if (music !== null) {
        music.unloadAsync();
      }
    };
  }, [music]);

  return { playMusic, stopSound, isPlaying };
};
