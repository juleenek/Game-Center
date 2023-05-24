import { extendTheme } from 'native-base';
import { variantHome } from './variants/buttonsVariants';

export const theme = extendTheme({
  colors: {
    white: {
      100: '#e5e5e5',
    },
    blue: {
      100: '#4989b6',
    },
    gray: {
      100: '#6b7280',
    },
  },
  components: {
    Button: {
      variants: {
        homeBlue: variantHome(`blue.100`),
        homeGray: variantHome(`gray.100`),
      },
    },
  },
});
