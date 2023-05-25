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
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
    Aldrich_400Regular,
  });

  useEffect(() => {
    
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
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
