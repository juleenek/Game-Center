import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Audiowide_400Regular,
  Aldrich_400Regular,
} from '@expo-google-fonts/dev';

import { AppNavigator } from './navigation/AppNavigator';
import { theme } from './themes/appTheme';
import { useEffect, useRef } from 'react';
import * as SplashScreen from 'expo-splash-screen'

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
    console.log("???")
  }

    return (
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    );
  
}
