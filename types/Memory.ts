import { ImageSourcePropType } from 'react-native';

export type MemoryCard = {
  matched: boolean;
  id: string,
  pairId: number;
  isVisible: boolean;
  source: ImageSourcePropType | undefined;
};

