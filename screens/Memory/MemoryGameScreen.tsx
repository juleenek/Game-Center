import * as React from 'react';
import { Container, Text, Flex, Center } from 'native-base';
import { ImageBackground, View } from 'react-native';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { useMemoryCards } from '../../services/MemoryService';
import { Card } from '../../components/MemoryGame/Card';
import { MemoryCard } from '../../types/Memory';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const { level } = route.params;
  const { getCards } = useMemoryCards({ level });
  const cards: MemoryCard[] = getCards();
  cards.push(...cards);

  const getCardsComponents = () => {
    const cardComponents = [];
    let index = 0;

    for (let i = 0; i < 6; i++) {
      const cardElements = [];

      for (let j = index; j < index + 2; j++) {
        cardElements.push(<Card key={j} card={cards[j]} />);
      }

      index += 2;

      cardComponents.push(<View key={i}>{cardElements}</View>);
    }

    return cardComponents;
  };

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Container alignItems='center' variant='basic'>
        <Flex direction='row'>{getCardsComponents()}</Flex>
      </Container>
    </ImageBackground>
  );
};
