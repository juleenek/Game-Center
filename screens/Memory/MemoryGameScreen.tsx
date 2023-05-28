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

  const useChoices = () => {
    const [choiceOne, setChoiceOne] = React.useState<MemoryCard | null>(null);
    const [choiceTwo, setChoiceTwo] = React.useState<MemoryCard | null>(null);

    React.useEffect(() => {
      console.log(`one: ${choiceOne?.pairId} two: ${choiceTwo?.pairId}`);
      if (choiceOne && choiceTwo) {
        if (
          choiceOne.pairId === choiceTwo.pairId &&
          choiceOne.source === choiceTwo.source
        ) {
          console.log('DOBRZE');
          resetTurn();
        } else {
          console.log('źle');
          setTimeout(resetTurn, 1000); // Delay resetting the cards
        }
      }
    }, [choiceOne, choiceTwo]);

    const handleChoice = (card: MemoryCard) => {
      if (choiceOne && choiceTwo) return;

      if (choiceOne) {
        setChoiceTwo(card);
      } else {
        setChoiceOne(card);
      }
    };

    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
    };

    return { handleChoice };
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
            <Card useChoice={useChoices} key={key} card={cards[j]} />
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