import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const useSoundService = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  let isPlaying: boolean = false;

  const playSound = async () => {
    const source = require("../assets/background-music.mp3");
    const { sound } = await Audio.Sound.createAsync(source, {
      shouldPlay: true,
      isLooping: true,
      volume: 0.01 // temporary testing
    });
    setSound(sound);
    if (sound !== null) {
      await sound.playAsync();
      isPlaying = true;
    } else {
      console.log("Sound not found.");
    }
  };

  const stopSound = async () => {
    if (sound !== null) {
      await sound.stopAsync();
    } else {
      console.log("Sound not found");
    }
  };

  useEffect(() => {
    return () => {
      if (sound !== null) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return { playSound, stopSound, isPlaying };
};