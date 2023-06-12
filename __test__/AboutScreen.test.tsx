import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AboutScreen } from '../screens/AboutScreen';
import { NativeBaseProvider } from 'native-base';


describe('HomeScreen', () => {
  let props: any;

  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  const renderHomeScreen = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <AboutScreen {...props} />
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

  it('navigates to GitHub page when github button is pressed', () => {
    const { getByTestId } = renderHomeScreen();
    const memoryButton = getByTestId('github-button');
    fireEvent.press(memoryButton);
    expect(global.window.location.href).toContain('https://github.com/juleenek/Game-Center');
  });

});
