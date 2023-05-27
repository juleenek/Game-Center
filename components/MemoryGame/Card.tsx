import * as React from 'react';
import { Container, Text, Center } from 'native-base';
import { MemoryCard } from '../../types/Memory';

type Props = {
  card: MemoryCard;
  onClick: void;
};

export const Card = (props: Props) => {
  return <Container alignItems='center' variant='basic'></Container>;
};
