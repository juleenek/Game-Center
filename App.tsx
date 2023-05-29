import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { AppNavigator } from "./navigation/AppNavigator";
import { theme } from "./themes/appTheme";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Audiowide_400Regular,
  Aldrich_400Regular,
} from "@expo-google-fonts/dev";
import { SoundService } from "./services/SoundService";;

export default function App() {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
    Aldrich_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      SoundService.playMusic();
        }
    prepare();
  }, []);


  if (!fontsLoaded) {
    return null;
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
