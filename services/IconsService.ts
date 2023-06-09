interface Image {
  id: number;
  name: string;
  image: any;
  matched: boolean;
}
export class IconsService {
  private static cards: Array<Image> = [
    {
      id: 1,
      name: 'icon-1.png',
      image: require('../assets/cards/icon-1.png'),
      matched: false,
    },
    {
      id: 2,
      name: 'icon-2.png',
      image: require('../assets/cards/icon-2.png'),
      matched: false,
    },
    {
      id: 3,
      name: 'icon-3.png',
      image: require('../assets/cards/icon-3.png'),
      matched: false,
    },
    {
      id: 4,
      name: 'icon-4.png',
      image: require('../assets/cards/icon-4.png'),
      matched: false,
    },
    {
      id: 5,
      name: 'icon-5.png',
      image: require('../assets/cards/icon-5.png'),
      matched: false,
    },
    {
      id: 6,
      name: 'icon-6.png',
      image: require('../assets/cards/icon-6.png'),
      matched: false,
    },
    {
      id: 7,
      name: 'icon-7.png',
      image: require('../assets/cards/icon-7.png'),
      matched: false,
    },
    {
      id: 8,
      name: 'icon-8.png',
      image: require('../assets/cards/icon-8.png'),
      matched: false,
    },
    {
      id: 9,
      name: 'icon-9.png',
      image: require('../assets/cards/icon-9.png'),
      matched: false,
    },
    {
      id: 10,
      name: 'icon-10.png',
      image: require('../assets/cards/icon-10.png'),
      matched: false,
    },
    {
      id: 11,
      name: 'icon-11.png',
      image: require('../assets/cards/icon-11.png'),
      matched: false,
    },
    {
      id: 12,
      name: 'icon-12.png',
      image: require('../assets/cards/icon-12.png'),
      matched: false,
    },
    {
      id: 13,
      name: 'icon-13.png',
      image: require('../assets/cards/icon-13.png'),
      matched: false,
    },
    {
      id: 14,
      name: 'icon-14.png',
      image: require('../assets/cards/icon-14.png'),
      matched: false,
    },
    {
      id: 15,
      name: 'icon-15.png',
      image: require('../assets/cards/icon-15.png'),
      matched: false,
    },
    {
      id: 16,
      name: 'icon-16.png',
      image: require('../assets/cards/icon-16.png'),
      matched: false,
    },
    {
      id: 17,
      name: 'icon-17.png',
      image: require('../assets/cards/icon-17.png'),
      matched: false,
    },
    {
      id: 18,
      name: 'icon-18.png',
      image: require('../assets/cards/icon-18.png'),
      matched: false,
    },
    {
      id: 19,
      name: 'icon-19.png',
      image: require('../assets/cards/icon-19.png'),
      matched: false,
    },
    {
      id: 20,
      name: 'icon-20.png',
      image: require('../assets/cards/icon-20.png'),
      matched: false,
    },
    {
      id: 21,
      name: 'icon-21.png',
      image: require('../assets/cards/icon-21.png'),
      matched: false,
    },
    {
      id: 22,
      name: 'icon-22.png',
      image: require('../assets/cards/icon-22.png'),
      matched: false,
    },
    {
      id: 23,
      name: 'icon-23.png',
      image: require('../assets/cards/icon-23.png'),
      matched: false,
    },
    {
      id: 24,
      name: 'icon-24.png',
      image: require('../assets/cards/icon-24.png'),
      matched: false,
    },
    {
      id: 25,
      name: 'icon-25.png',
      image: require('../assets/cards/icon-25.png'),
      matched: false,
    },
    {
      id: 26,
      name: 'icon-26.png',
      image: require('../assets/cards/icon-26.png'),
      matched: false,
    },
    {
      id: 27,
      name: 'icon-27.png',
      image: require('../assets/cards/icon-27.png'),
      matched: false,
    },
    {
      id: 28,
      name: 'icon-28.png',
      image: require('../assets/cards/icon-28.png'),
      matched: false,
    },
    {
      id: 29,
      name: 'icon-29.png',
      image: require('../assets/cards/icon-29.png'),
      matched: false,
    },
    {
      id: 30,
      name: 'icon-30.png',
      image: require('../assets/cards/icon-30.png'),
      matched: false,
    },
    {
      id: 31,
      name: 'icon-31.png',
      image: require('../assets/cards/icon-31.png'),
      matched: false,
    },
    {
      id: 32,
      name: 'icon-32.png',
      image: require('../assets/cards/icon-32.png'),
      matched: false,
    },
    {
      id: 33,
      name: 'icon-33.png',
      image: require('../assets/cards/icon-33.png'),
      matched: false,
    },
    {
      id: 34,
      name: 'icon-34.png',
      image: require('../assets/cards/icon-34.png'),
      matched: false,
    },
    {
      id: 35,
      name: 'icon-35.png',
      image: require('../assets/cards/icon-35.png'),
      matched: false,
    },
    {
      id: 36,
      name: 'icon-36.png',
      image: require('../assets/cards/icon-36.png'),
      matched: false,
    },
    {
      id: 37,
      name: 'icon-37.png',
      image: require('../assets/cards/icon-37.png'),
      matched: false,
    },
    {
      id: 38,
      name: 'icon-38.png',
      image: require('../assets/cards/icon-38.png'),
      matched: false,
    },
    {
      id: 39,
      name: 'icon-39.png',
      image: require('../assets/cards/icon-39.png'),
      matched: false,
    },
    {
      id: 40,
      name: 'icon-40.png',
      image: require('../assets/cards/icon-40.png'),
      matched: false,
    },
    {
      id: 41,
      name: 'icon-41.png',
      image: require('../assets/cards/icon-41.png'),
      matched: false,
    },
    {
      id: 42,
      name: 'icon-42.png',
      image: require('../assets/cards/icon-42.png'),
      matched: false,
    },
    {
      id: 43,
      name: 'icon-43.png',
      image: require('../assets/cards/icon-43.png'),
      matched: false,
    },
    {
      id: 44,
      name: 'icon-44.png',
      image: require('../assets/cards/icon-44.png'),
      matched: false,
    },
    {
      id: 45,
      name: 'icon-45.png',
      image: require('../assets/cards/icon-45.png'),
      matched: false,
    },
    {
      id: 46, 
      name: 'icon-46.png',
      image: require('../assets/cards/icon-46.png'),
      matched: false,
    },
    {
      id: 47,
      name: 'icon-47.png',
      image: require('../assets/cards/icon-47.png'),
      matched: false,
    },
    {
      id: 48,
      name: 'icon-48.png',
      image: require('../assets/cards/icon-48.png'),
      matched: false,
    },
    {
      id: 49,
      name: 'icon-49.png',
      image: require('../assets/cards/icon-49.png'),
      matched: false,
    },
    {
      id: 50,
      name: 'icon-50.png',
      image: require('../assets/cards/icon-50.png'),
      matched: false,
    },
  ];

  static GetImage = (name: string) => {
    const found = IconsService.cards.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
