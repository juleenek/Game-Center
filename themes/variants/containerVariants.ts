import { Dimensions } from 'react-native';

export const variantBasicContainer = () => {
  return {
    h: '100%',
    w: '100%',
    maxWidth: '100%',
    bg: '#2f1d3bb8',
  };
};
export const settingsBasicContainer = () => {
  return {
    h: '30%',
    w: '70%',
    maxWidth: '70%',
    bg: '#6b7280',
    borderWidth: '1',
    borderColor: '#337e88',
    borderRadius: '10',
    justifyContent: 'center',
    shadow: '4',
    paddingBottom: '10'
  }
}
export const aboutBasicContainer = () => {
  return {
    w: '70%',
    display: 'flex',
    bg: '#6b7280',
    borderWidth: '1',
    borderColor: '#337e88',
    borderRadius: '10',
    justifyContent: 'center',
    shadow: '4',
    paddingTop: '4',
    paddingBottom: '8'
  }
}

export const variantCard = () => {
  return {
    h: `${Dimensions.get('window').width / 5}`,
    w: `${Dimensions.get('window').width / 5}`,
  };
};
