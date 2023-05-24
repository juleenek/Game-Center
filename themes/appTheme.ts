import { extendTheme } from 'native-base';
import { variantHome } from './variants/buttonVariants';
import { variantButton } from './variants/textVariants';
import { variantBasicContainer } from './variants/containerVariants';
import { variantBasicHeading } from './variants/headingVariants';

export const theme = extendTheme({
  colors: {
    white: {
      100: '#e5e5e5',
    },
    blue: {
      100: '#4399A5',
      200: '#337e88',
    },
    gray: {
      100: '#6b7280',
      200: '#5b6271',
    },
  },
  components: {
    Button: {
      variants: {
        homeBlue: variantHome(`blue.100`, `blue.200`),
        homeGray: variantHome(`gray.100`, `gray.200`),
      },
    },
    Text: {
      variants: {
        textButton: variantButton,
      },
    },
    Container: {
      variants: {
        basic: variantBasicContainer,
      },
    },
    Heading: {
      variants: {
        basic: variantBasicHeading
      }
    }
  },
});
