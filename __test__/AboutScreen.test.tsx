import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AboutScreen } from '../screens/AboutScreen';
import { Linking } from 'react-native';
import { NativeBaseProvider } from 'native-base';

describe('AboutScreen', () => {
    const inset = {
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      };
    const renderAboutScreen = () => {
        return render(
            <NativeBaseProvider initialWindowMetrics={inset}>
            <AboutScreen />
            </NativeBaseProvider>
        );
      };
  it('Renders AboutScreen without errors', () => {
    expect(() => renderAboutScreen()).not.toThrow();
  });

  it('renders the logo image', () => {
    const { getByTestId } = renderAboutScreen();
    const logoImage = getByTestId('logo-image');
    expect(logoImage).toBeTruthy();
  });

  it('opens the GitHub URL when GitHub button is pressed', () => {
    jest.spyOn(Linking, 'openURL');
    const { getByTestId } = renderAboutScreen();
    const githubButton = getByTestId('github-button');
    fireEvent.press(githubButton);
    expect(Linking.openURL).toHaveBeenCalledWith('https://github.com/juleenek/Game-Center');
  });
});
