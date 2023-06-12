import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MemoryStartScreen, Props } from '../screens/Memory/MemoryStartScreen';
import { NativeBaseProvider } from 'native-base';
import { MemoryLevels } from '../utils/enums/levels.enum';

const createTestProps = (props: Partial<Props>) => ({
  navigation: {
    navigate: jest.fn(),
    ...props.navigation, // Include additional navigation props
  },
});

describe('MemoryStartScreen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  const renderMemoryStartScreen = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <MemoryStartScreen {...props} />
      </NativeBaseProvider>
    );
  };

  it('Renders MemoryStartScreen without errors', () => {
    expect(() => renderMemoryStartScreen()).not.toThrow();
  });

  it('navigates to MemoryGame screen with level set to EASY when EASY button is pressed', () => {
    const { getByTestId } = renderMemoryStartScreen();
    const easyButton = getByTestId('easy-button');
    fireEvent.press(easyButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('MemoryGame', {
      level: MemoryLevels.EASY,
    });
  });

  it('navigates to MemoryGame screen with level set to MEDIUM when MEDIUM button is pressed', () => {
    const { getByTestId } = renderMemoryStartScreen();
    const mediumButton = getByTestId('medium-button');
    fireEvent.press(mediumButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('MemoryGame', {
      level: MemoryLevels.MEDIUM,
    });
  });

  it('navigates to MemoryGame screen with level set to HARD when HARD button is pressed', () => {
    const { getByTestId } = renderMemoryStartScreen();
    const hardButton = getByTestId('hard-button');
    fireEvent.press(hardButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith('MemoryGame', {
      level: MemoryLevels.HARD,
    });
  });
});
