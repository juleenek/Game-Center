interface Image {
  name: string;
  image: any;
}
export class IconsService {
  private static cards: Array<Image> = [
    {
      name: 'icon-1.png',
      image: require('../assets/cards/icon-1.png'),
    },
    {
      name: 'icon-2.png',
      image: require('../assets/cards/icon-2.png'),
    },
    {
      name: 'icon-3.png',
      image: require('../assets/cards/icon-3.png'),
    },
    {
      name: 'icon-4.png',
      image: require('../assets/cards/icon-4.png'),
    },
    {
      name: 'icon-5.png',
      image: require('../assets/cards/icon-5.png'),
    },
    {
      name: 'icon-6.png',
      image: require('../assets/cards/icon-6.png'),
    },
    {
      name: 'icon-7.png',
      image: require('../assets/cards/icon-7.png'),
    },
    {
      name: 'icon-8.png',
      image: require('../assets/cards/icon-8.png'),
    },
    {
      name: 'icon-9.png',
      image: require('../assets/cards/icon-9.png'),
    },
    {
      name: 'icon-10.png',
      image: require('../assets/cards/icon-10.png'),
    },
    {
      name: 'icon-11.png',
      image: require('../assets/cards/icon-11.png'),
    },
    {
      name: 'icon-12.png',
      image: require('../assets/cards/icon-12.png'),
    },
    {
      name: 'icon-13.png',
      image: require('../assets/cards/icon-13.png'),
    },
    {
      name: 'icon-14.png',
      image: require('../assets/cards/icon-14.png'),
    },
    {
      name: 'icon-15.png',
      image: require('../assets/cards/icon-15.png'),
    },
    {
      name: 'icon-16.png',
      image: require('../assets/cards/icon-16.png'),
    },
    {
      name: 'icon-17.png',
      image: require('../assets/cards/icon-17.png'),
    },
    {
      name: 'icon-18.png',
      image: require('../assets/cards/icon-18.png'),
    },
    {
      name: 'icon-19.png',
      image: require('../assets/cards/icon-19.png'),
    },
    {
      name: 'icon-20.png',
      image: require('../assets/cards/icon-20.png'),
    },
    {
      name: 'icon-21.png',
      image: require('../assets/cards/icon-21.png'),
    },
    {
      name: 'icon-22.png',
      image: require('../assets/cards/icon-22.png'),
    },
    {
      name: 'icon-23.png',
      image: require('../assets/cards/icon-23.png'),
    },
    {
      name: 'icon-24.png',
      image: require('../assets/cards/icon-24.png'),
    },
    {
      name: 'icon-25.png',
      image: require('../assets/cards/icon-25.png'),
    },
    {
      name: 'icon-26.png',
      image: require('../assets/cards/icon-26.png'),
    },
    {
      name: 'icon-27.png',
      image: require('../assets/cards/icon-27.png'),
    },
    {
      name: 'icon-28.png',
      image: require('../assets/cards/icon-28.png'),
    },
    {
      name: 'icon-29.png',
      image: require('../assets/cards/icon-29.png'),
    },
    {
      name: 'icon-30.png',
      image: require('../assets/cards/icon-30.png'),
    },
    {
      name: 'icon-31.png',
      image: require('../assets/cards/icon-31.png'),
    },
    {
      name: 'icon-32.png',
      image: require('../assets/cards/icon-32.png'),
    },
    {
      name: 'icon-33.png',
      image: require('../assets/cards/icon-33.png'),
    },
    {
      name: 'icon-34.png',
      image: require('../assets/cards/icon-34.png'),
    },
    {
      name: 'icon-35.png',
      image: require('../assets/cards/icon-35.png'),
    },
    {
      name: 'icon-36.png',
      image: require('../assets/cards/icon-36.png'),
    },
    {
      name: 'icon-37.png',
      image: require('../assets/cards/icon-37.png'),
    },
    {
      name: 'icon-38.png',
      image: require('../assets/cards/icon-38.png'),
    },
    {
      name: 'icon-39.png',
      image: require('../assets/cards/icon-39.png'),
    },
    {
      name: 'icon-40.png',
      image: require('../assets/cards/icon-40.png'),
    },
    {
      name: 'icon-41.png',
      image: require('../assets/cards/icon-41.png'),
    },
    {
      name: 'icon-42.png',
      image: require('../assets/cards/icon-42.png'),
    },
    {
      name: 'icon-43.png',
      image: require('../assets/cards/icon-43.png'),
    },
    {
      name: 'icon-44.png',
      image: require('../assets/cards/icon-44.png'),
    },
    {
      name: 'icon-45.png',
      image: require('../assets/cards/icon-45.png'),
    },
    {
      name: 'icon-46.png',
      image: require('../assets/cards/icon-46.png'),
    },
    {
      name: 'icon-47.png',
      image: require('../assets/cards/icon-47.png'),
    },
    {
      name: 'icon-48.png',
      image: require('../assets/cards/icon-48.png'),
    },
    {
      name: 'icon-49.png',
      image: require('../assets/cards/icon-49.png'),
    },
    {
      name: 'icon-50.png',
      image: require('../assets/cards/icon-50.png'),
    },
  ];

  static GetImage = (name: string) => {
    const found = IconsService.cards.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
