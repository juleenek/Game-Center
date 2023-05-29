import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MemoryStartScreen } from '../screens/Memory/MemoryStartScreen';
import { MemoryGameScreen } from '../screens/Memory/MemoryGameScreen';
import { MemoryLevels } from '../utils/enums/levels.enum';

export type AppStackParamList = {
  Home: undefined;
  About: undefined;
  Settings: undefined;
  MemoryStart: undefined;
  MemoryGame: { level: MemoryLevels };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        <Stack.Screen name='MemoryStart' component={MemoryStartScreen} />
        <Stack.Screen name='MemoryGame' component={MemoryGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
