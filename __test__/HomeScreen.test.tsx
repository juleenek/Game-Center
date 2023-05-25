import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { HomeScreen } from '../screens/HomeScreen';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('HomeScreen testing', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
  });

  const renderHomeScreen = () => {
    return render(
      <NativeBaseProvider>
        <HomeScreen navigation={props} />
      </NativeBaseProvider>
    );
  };

  it('Renders HomeScreen without errors', () => {
    expect(() => renderHomeScreen()).not.toThrow();
  });

  it('Renders logo and heading correctly', () => {
    const { getByText } = renderHomeScreen();
    // Tutaj mam problem z błędem "Unable to find an element with text: Game Center"
    const headingElement = getByText('Game Center');
    expect(headingElement).toBeDefined();  
  });
});
