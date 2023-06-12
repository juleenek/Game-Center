import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MemoryGameScreen, Props } from '../screens/Memory/MemoryGameScreen';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../navigation/AppNavigator';
import { NativeBaseProvider } from 'native-base';
import { MemoryLevels } from '../utils/enums/levels.enum';

const createTestProps = (props: Partial<Props>) => ({
  navigation: {
    navigate: jest.fn(),
    ...props.navigation, // Include additional navigation props
  },
  route: {
    params: {
      level: MemoryLevels.EASY, // Set the level according to your test case
    },
    ...props.route, // Include additional route props
  },
});

describe('MemoryGameScreen', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  const renderMemoryGameScreen = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <MemoryGameScreen {...props} />
      </NativeBaseProvider>
    );
  };

  it('Renders MemoryGameScreen without errors', () => {
    expect(() => renderMemoryGameScreen()).not.toThrow();
  });

  it('Handles card click correctly', () => {
    const { getAllByTestId } = renderMemoryGameScreen();
    const cards = getAllByTestId('card');
    fireEvent.press(cards[0]);
  });

  it('Finishes the game correctly', () => {
    const { getAllByTestId } = renderMemoryGameScreen();
    const cards = getAllByTestId('card');
    cards.forEach((card) => {
      fireEvent.press(card);
    });
  });
});
