import * as React from 'react';
import { Container, Text, Center } from 'native-base';
import { ImageBackground } from 'react-native';
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

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          <Text fontSize='3xl' variant='textButton'>
            <Card card={cards[1]} onClick={undefined}></Card>
          </Text>
        </Container>
      </Center>
    </ImageBackground>
  );
};
