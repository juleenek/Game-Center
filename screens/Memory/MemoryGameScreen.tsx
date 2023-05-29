import * as React from 'react';
import { Container, Text, Flex, Center, Box } from 'native-base';
import { ImageBackground, View } from 'react-native';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { useMemoryCards } from '../../services/MemoryService';
import { Card } from '../../components/MemoryGame/Card';
import { MemoryCard } from '../../types/Memory';
import { getCardsFlexParams } from '../../utils/_generators';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const { level } = route.params;
  const { getCards } = useMemoryCards();
  const cards: MemoryCard[] = getCards(level);

  let choiceOne: null | number = null;
  let choiceTwo: null | number = null;

  const handleChoice = (card: MemoryCard) => {
    if (choiceOne !== null && choiceTwo === null) {
      choiceTwo = card.pairId;
      console.log(`one: ${choiceOne} two: ${choiceTwo}`);
    }
    if (choiceOne === null) {
      choiceOne = card.pairId;
      console.log(`one: ${choiceOne} two: ${choiceTwo}`);
    }

    if (choiceOne !== null && choiceTwo !== null && choiceOne === choiceTwo) {
      console.log('SUPER');
      choiceOne = null;
      choiceTwo = null;
    }
    if (choiceOne !== null && choiceTwo !== null && choiceOne !== choiceTwo) {
      console.log('nie super');
      choiceOne = null;
      choiceTwo = null;
    }
  };

  const getCardsComponents = () => {
    const cardComponents = [];
    const loopParams = getCardsFlexParams(level);
    let index = 0;
    let key = 0;

    for (let k = 0; k < loopParams.k; k++) {
      for (let i = 0; i < 2; i++) {
        const cardElements = [];

        for (let j = index; j < index + loopParams.j; j++) {
          cardElements.push(
            <Card handleChoice={handleChoice} key={key} card={cards[j]} />
          );
          key += 1;
        }

        index += loopParams.j;

        cardComponents.push(
          <Flex direction='row' key={key}>
            {cardElements}
          </Flex>
        );
        key += 1;
      }
    }

    return (
      <Flex key={key} direction='column'>
        {cardComponents}
      </Flex>
    );
  };

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          {getCardsComponents()}
        </Container>
      </Center>
    </ImageBackground>
  );
};
