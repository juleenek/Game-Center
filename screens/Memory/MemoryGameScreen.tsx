import * as React from 'react';
import { Container, Text, Flex, Center, Box } from 'native-base';
import { ImageBackground, View } from 'react-native';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { useMemoryCards } from '../../services/MemoryService';
import { Card } from '../../components/MemoryGame/Card';
import { MemoryCard } from '../../types/Memory';
import { getCardsFlexParams, getCardsNumber } from '../../utils/_generators';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;
export let goodPairs: any = [];
export let disabledCards: string[] = [];

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const [finished, setFinished] = React.useState<boolean>(false);
  const { level } = route.params;
  const { getCards } = useMemoryCards();
  const cards: MemoryCard[] = getCards(level);
  let choiceOne: null | MemoryCard = null;
  let choiceTwo: null | MemoryCard = null;

  React.useEffect(() => {
    goodPairs = [];
    setFinished(false);
  }, []);

  const handleChoice = (card: MemoryCard) => {
    if (finished) return;
    console.log(card.id);

    if (choiceOne !== null && choiceTwo === null) {
      choiceTwo = card;
      disabledCards.push(card.id);
      console.log(`one: ${choiceOne.pairId} two: ${choiceTwo.pairId}`);
      // Odwróc jedną kartę
    }

    if (choiceOne === null) {
      choiceOne = card;
      disabledCards.push(card.id);
      console.log(`one: ${choiceOne.pairId} two: ${choiceTwo?.pairId}`);
      // Odwróc jedną kartę
    }

    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        console.log('SUPER');
        choiceOne = null;
        choiceTwo = null;
        // Nie odwracaj kart
        goodPairs.push(choiceOne);
        if (goodPairs.length === getCardsNumber(level)) {
          console.log('WYGRANA');
          setFinished(true);
        }
      }
      if (choiceOne !== choiceTwo) {
        console.log('nie super');
        choiceOne = null;
        choiceTwo = null;
        // Odwróć obie karty
        disabledCards = [];
      }
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
        let isFirst = true;

        for (let j = index; j < index + loopParams.j; j++) {
          if (isFirst) cards[j].id = uuid();
          isFirst = false;
          cardElements.push(
            <Card
              handleChoice={handleChoice}
              key={key}
              card={cards[j]}
              level={level}
              isDisabled={
                disabledCards[0] === cards[j].id ||
                disabledCards[1] === cards[j].id
              }
              isFlipped={cards[j] === choiceOne || cards[j] === choiceTwo}
            />
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
