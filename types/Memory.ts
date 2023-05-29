import { ImageSourcePropType } from 'react-native';

export type MemoryCard = {
  id: string,
  pairId: number;
  isVisible: boolean;
  source: ImageSourcePropType | undefined;
};

