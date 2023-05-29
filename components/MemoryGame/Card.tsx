import * as React from 'react';
import { Container, Image, Pressable } from 'native-base';
import { MemoryCard } from '../../types/Memory';
import { BACK_CARD_IMAGE } from '../../utils/_shared';
import { MemoryLevels } from '../../utils/enums/levels.enum';
import { getCardsSize } from '../../utils/_generators';

type Props = {
  card: MemoryCard;
  handleChoice(card: MemoryCard): void;
  level: MemoryLevels;
  isFlipped: boolean;
  isDisabled: boolean;
};

export const Card = (props: Props) => {
  const { card, level, isFlipped, isDisabled, handleChoice } = props;
  const sizes = getCardsSize(level);

  const handlePress = () => {
    handleChoice(card);
    console.log(isDisabled);
  };

  return (
    <Container>
      <Pressable
        onPress={handlePress}
        w={sizes.w}
        h={sizes.h}
        alignItems='center'
        variant='card'
        marginTop='5'
        marginX='2'
      >
        <Image
          bg='#271e2d'
          borderWidth='3'
          borderColor='#ffffff'
          w='100%'
          h='100%'
          source={card.source}
          alt='Logo'
          marginTop={35}
        />
      </Pressable>
    </Container>
  );
};
