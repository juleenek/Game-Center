import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen, Props } from '../screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';

const createTestProps = (props: Partial<Props>) => ({
  navigation: {
    navigate: jest.fn(),
    ...props.navigation, // Include additional navigation props
  },
});

describe('HomeScreen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  const renderHomeScreen = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <HomeScreen {...props} />
      </NativeBaseProvider>
    );
  };


  it('Renders HomeScreen without errors', () => {
    expect(() => renderHomeScreen()).not.toThrow();
  });

  it('renders the logo image', () => {
    const { getByTestId } = renderHomeScreen();
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeTruthy();
  });

  it('navigates to MemoryStart screen when Memory button is pressed', () => {
    const { getByTestId } = renderHomeScreen();
    const memoryButton = getByTestId('memory-button');
    fireEvent.press(memoryButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('MemoryStart');
  });

  it('navigates to About screen when About button is pressed', () => {
    const { getByTestId } = renderHomeScreen();
    const aboutButton = getByTestId('about-button');
    fireEvent.press(aboutButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('About');
  });

  it('navigates to Settings screen when Settings button is pressed', () => {
    const { getByTestId } = renderHomeScreen();
    const settingsButton = getByTestId('settings-button');
    fireEvent.press(settingsButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('Settings');
  });
});
