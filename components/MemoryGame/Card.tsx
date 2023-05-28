import * as React from 'react';
import { Container, Image } from 'native-base';
import { MemoryCard } from '../../types/Memory';
import { BACK_CARD_IMAGE } from '../../utils/_shared';

type Props = {
  card: MemoryCard;
};

export const Card = (props: Props) => {
  const { card } = props;

  return (
    <Container alignItems='center' variant='card'>
      {/* <Image
        w='100%'
        h='100%'
        source={BACK_CARD_IMAGE}
        alt='Logo'
        marginTop={35}
      /> */}
      <Image w='100%' h='100%' source={card.source} alt='Logo' marginTop={35} />
    </Container>
  );
};
