import { NativeBaseProvider } from 'native-base';
import { AppNavigator } from './navigation/AppNavigator';
import { theme } from './themes/appTheme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
