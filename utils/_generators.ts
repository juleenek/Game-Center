import { MemoryLevels } from './enums/levels.enum';

export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getCardsFlexParams = (level: MemoryLevels) => {
  const params = {
    k: 0,
    j: 0,
  };
  switch (level) {
    case MemoryLevels.EASY:
      params.k = 2;
      params.j = 3;
      break;
    case MemoryLevels.MEDIUM:
      params.k = 2;
      params.j = 4;
      break;
    case MemoryLevels.HARD:
      params.k = 3;
      params.j = 4;
      break;
  }

  return params;
};
