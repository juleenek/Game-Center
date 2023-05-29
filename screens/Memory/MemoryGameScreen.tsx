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

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;
export let goodPairs: any = [];
export let disabledCards: number[] = [];

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

  const handleChoice = (card: MemoryCard, cardKey: number) => {
    if (finished) return;
    if (disabledCards[0] === cardKey || disabledCards[1] === cardKey) return;
    
    console.log('key: ' + cardKey);

    if (choiceOne !== null && choiceTwo === null) {
      choiceTwo = card;
      disabledCards.push(cardKey);
      console.log(`one: ${choiceOne.pairId} two: ${choiceTwo.pairId}`);
      // Odwróc jedną kartę
    }

    if (choiceOne === null) {
      choiceOne = card;
      disabledCards.push(cardKey);
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

        for (let j = index; j < index + loopParams.j; j++) {
          cardElements.push(
            <Card
              cardKey={key}
              handleChoice={handleChoice}
              key={key}
              card={cards[j]}
              level={level}
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
