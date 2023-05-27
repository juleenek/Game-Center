import { MemoryCard } from '../types/Memory';
import { randomNum } from '../utils/_generators';
import { MemoryLevels } from '../utils/enums/levels.enum';

const EASY_CARDS_NUMBER = 6;
const MEDIUM_CARDS_NUMBER = 8;
const HARD_CARDS_NUMBER = 10;
const CARDS_IMAGES_NUMBER = 50;

type Props = {
  level: MemoryLevels;
};

export const useMemoryCards = (props: Props) => {
  const { level } = props;
  const cards: MemoryCard[] = [];

  const getCards = () => {
    let cardsNumber;
    switch (level) {
      case MemoryLevels.EASY:
        cardsNumber = EASY_CARDS_NUMBER;
        break;
      case MemoryLevels.MEDIUM:
        cardsNumber = MEDIUM_CARDS_NUMBER;
        break;
      case MemoryLevels.HARD:
        cardsNumber = HARD_CARDS_NUMBER;
        break;
    }

    for (let i = 1; i <= cardsNumber; i++) {
      const card: MemoryCard = {
        pairId: i,
        isVisible: false,
        source: `../assets/cards/icon-${randomNum(1, CARDS_IMAGES_NUMBER)}.png`,
      };
      cards.push(card);
    }

    return cards;
  };

  const shuffleCards = () => {};

  return { getCards };
};
