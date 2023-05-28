import { ImageSourcePropType } from 'react-native';
import { Timespan } from 'react-native/Libraries/Utilities/createPerformanceLogger';

export type MemoryCard = {
  pairId: number;
  isVisible: boolean;
  source: ImageSourcePropType | undefined;
};

export type MemoryGame = {
  id: number;
  moves: number;
  time: Timespan;
  points: number;
};
