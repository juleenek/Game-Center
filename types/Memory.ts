import { ImageSourcePropType } from 'react-native';

export type MemoryCard = {
  pairId: number;
  isVisible: boolean;
  source: ImageSourcePropType | undefined;
};

