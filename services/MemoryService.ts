import { MemoryCard } from '../types/Memory';
import { randomNum } from '../utils/_generators';
import { MemoryLevels } from '../utils/enums/levels.enum';
import { IconsService } from './IconsService';

const EASY_CARDS_NUMBER = 6;
const MEDIUM_CARDS_NUMBER = 8;
const HARD_CARDS_NUMBER = 12;
const CARDS_IMAGES_NUMBER = 50;

type Props = {
  level: MemoryLevels;
};

export const useMemoryCards = (props: Props) => {
  const { level } = props;
  const cards: MemoryCard[] = [];

  const getCards = () => {
    let cardsNumber;
    const randomNums: number[] = [];

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

    const getRandom: any = () => {
      let num = randomNum(1, CARDS_IMAGES_NUMBER);
      if (randomNums.includes(num)) {
        return getRandom();
      } else {
        randomNums.push(num);
        return num;
      }
    };

    for (let i = 1; i <= cardsNumber; i++) {
      const card: MemoryCard = {
        pairId: i,
        isVisible: false,
        source: IconsService.GetImage(`icon-${getRandom()}.png`),
      };
      cards.push(card);
    }

    cards.push(...cards);
    return shuffleCards(cards);
  };

  const shuffleCards = (cards: MemoryCard[]) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp: any = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  };

  return { getCards };
};
