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

export const getCardsSize = (level: MemoryLevels) => {
  const params = {
    w: 0,
    h: 0,
  };
  switch (level) {
    case MemoryLevels.EASY:
      params.w = 100;
      params.h = 100;
      break;
    case MemoryLevels.MEDIUM:
      params.w = 85;
      params.h = 85;
      break;
    case MemoryLevels.HARD:
      params.w = 85;
      params.h = 85;
      break;
  }
  return params;
};

export const getCardsNumber = (level: MemoryLevels) => {
  let num = 0;
  switch (level) {
    case MemoryLevels.EASY:
      num = 6;
      break;
    case MemoryLevels.MEDIUM:
      num = 8;
      break;
    case MemoryLevels.HARD:
      num = 12;
      break;
  }
  return num;
};
