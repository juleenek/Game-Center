import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Audiowide_400Regular,
  Aldrich_400Regular,
} from "@expo-google-fonts/dev";

import { AppNavigator } from "./navigation/AppNavigator";
import { theme } from "./themes/appTheme";
import { useEffect, useRef, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Audio } from "expo-av";
import React from "react";

export default function App() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(true);

  const playSound = async () => {
    const source = require("./assets/background-music.mp3");
    const { sound } = await Audio.Sound.createAsync(source,
      {
        shouldPlay: true,
        isLooping: true
      }
    );
    setSound(sound);
    if (sound != null) {
      await sound.playAsync();
      setIsPlaying(true)

    }
      else console.log("Sound not found.");
  };

  const stopSound = async () => {
    if (sound != null) await sound.stopAsync();
    else console.log("Sound not found");
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  ///////////
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
    Aldrich_400Regular,
  });

  useEffect(() => {
    
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    playSound();
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
