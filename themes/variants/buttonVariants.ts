export const variantHome = (color: string, pressedColor: string) => {
  return {
    shadow: '5',
    rounded: 'full',
    bg: color,
    marginTop: '50',
    fontSize: '30',
    h: '7%',
    w: '55%',
    _pressed: {
      bg: pressedColor,
    },
  };
};
