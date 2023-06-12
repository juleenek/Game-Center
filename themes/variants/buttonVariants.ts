export const variantHome = (color: string, pressedColor: string) => {
  return {
    shadow: '5',
    rounded: 'full',
    bg: color,
    marginTop: '30',
    w: '55%',
    _pressed: {
      bg: pressedColor,
    },
  };
};
