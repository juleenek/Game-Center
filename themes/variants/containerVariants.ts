import { Dimensions } from 'react-native';

export const variantBasicContainer = () => {
  return {
    h: '100%',
    w: '100%',
    maxWidth: '100%',
    bg: '#2f1d3bb8',
  };
};

export const variantCard = () => {
  return {
    h: `${Dimensions.get('window').width / 5}`,
    w: `${Dimensions.get('window').width / 5}`,
  };
};
