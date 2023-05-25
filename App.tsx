import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Audiowide_400Regular,
  Aldrich_400Regular,
} from '@expo-google-fonts/dev';

import { AppNavigator } from './navigation/AppNavigator';
import { theme } from './themes/appTheme';

export const App = () => {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
    Aldrich_400Regular,
  });

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    );
  }
};
