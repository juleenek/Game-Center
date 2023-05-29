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
import { useTimer } from '../../hooks/timer';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;
export let goodPairs: any = [];
export let disabledCards: number[] = [];
export let pairedCards: number[] = [];

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const [finished, setFinished] = React.useState<boolean>(false);
  let isFinished = false;
  const { level } = route.params;
  const { getCards } = useMemoryCards();
  const cards: MemoryCard[] = getCards(level);
  let choiceOne: null | MemoryCard = null;
  let choiceTwo: null | MemoryCard = null;
  let choiceOneKey: null | number = null;
  let choiceTwoKey: null | number = null;
  const [time, stopTime] = useTimer(1000);

  React.useEffect(() => {
    goodPairs = [];
    setFinished(false);
  }, []);

  React.useEffect(() => {
    if (isFinished) {
      console.log('WYGRANA');
    }
  }, [finished]);

  const handleChoice = (card: MemoryCard, cardKey: number) => {
    if (finished) return;
    if (disabledCards[0] === cardKey || disabledCards[1] === cardKey) return;

    for (let i = 0; i < pairedCards.length; i++) {
      if (pairedCards[i] === cardKey) return;
    }

    console.log('key: ' + cardKey);

    if (choiceOne !== null && choiceTwo === null) {
      choiceTwo = card;
      choiceTwoKey = cardKey;
      disabledCards.push(cardKey);
      console.log(`one: ${choiceOne.pairId} two: ${choiceTwo.pairId}`);
    }

    if (choiceOne === null) {
      choiceOne = card;
      choiceOneKey = cardKey;
      disabledCards.push(cardKey);
      console.log(`one: ${choiceOne.pairId} two: ${choiceTwo?.pairId}`);
    }

    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        console.log('SUPER');
        choiceOne = null;
        choiceTwo = null;

        pairedCards.push(choiceOneKey as number);
        pairedCards.push(choiceTwoKey as number);

        choiceOneKey = null;
        choiceTwoKey = null;

        goodPairs.push(choiceOne);
        if (goodPairs.length === getCardsNumber(level)) {
          isFinished = true;
          setFinished(true);
        }
      }
      if (choiceOne !== choiceTwo) {
        console.log('nie super');
        choiceOne = null;
        choiceTwo = null;
        choiceOneKey = null;
        choiceTwoKey = null;
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
        <Text marginTop={30}>{time as string}</Text>
        <Container alignItems='center' variant='basic'>
          {getCardsComponents()}
        </Container>
      </Center>
    </ImageBackground>
  );
};
