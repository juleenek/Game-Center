import * as React from 'react';
import { Container, Image, Pressable } from 'native-base';
import { MemoryCard } from '../../types/Memory';
import { BACK_CARD_IMAGE } from '../../utils/_shared';

type Props = {
  card: MemoryCard;
  handleChoice(card: MemoryCard): void;
};

export const Card = (props: Props) => {
  const { card, handleChoice } = props;

  const handlePress = () => {
    handleChoice(card);
  };

  return (
    <Pressable onPress={handlePress}>
      <Container alignItems='center' variant='card' bg='#000000' marginTop={10}>
        <Image
          w='100%'
          h='100%'
          source={card.source}
          alt='Logo'
          marginTop={35}
        />
      </Container>
    </Pressable>
  );
};
