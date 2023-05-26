import React from "react";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { theme } from "./themes/appTheme";
import { Audio } from "expo-av";
import * as SplashScreen from "expo-splash-screen";
import { useSoundService } from './services/SoundService'
import {
  useFonts,
  Audiowide_400Regular,
  Aldrich_400Regular,
} from "@expo-google-fonts/dev";




export default function App() {
  const { playSound, stopSound, isPlaying } = useSoundService();
  
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
    Aldrich_400Regular,
  });

  useEffect(() => {
    
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    //TUTAJ CALL playSound
    playSound()
    prepare();
  }, []);

  if (!fontsLoaded && isPlaying === false) {
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
