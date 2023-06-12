import * as React from 'react';
import { useState, useEffect } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Container, Center } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { Card } from '../../components/MemoryGame/Card';
import { WinBoard } from '../../components/MemoryGame/WinBoard';
import { IconsService, Icon } from '../../services/IconsService';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';
import { MemoryLevels } from '../../utils/enums/levels.enum';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;
const EASY_CARDS_NUMBER = 6;
const MEDIUM_CARDS_NUMBER = 8;
const HARD_CARDS_NUMBER = 12;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const [finished, setFinished] = useState(false);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [iconOne, setIconOne] = useState<Icon | null>(null);
  const [iconTwo, setIconTwo] = useState<Icon | null>(null);
  const [noOfMatched, setNoOfMatched] = useState(0);
  const [time, _] = useState(Date.now());
  const { level } = route.params;

  let cardsNumber: number;

  switch (level) {
    case MemoryLevels.EASY:
      cardsNumber = EASY_CARDS_NUMBER;
      break;
    case MemoryLevels.MEDIUM:
      cardsNumber = MEDIUM_CARDS_NUMBER;
      break;
    case MemoryLevels.HARD:
      cardsNumber = HARD_CARDS_NUMBER;
      break;
  }
  const iconsSet = IconsService.cards
    .sort(() => Math.random() - 0.5)
    .slice(0, cardsNumber / 2);

  const handleCard = (icon: Icon) => {
    if (!icon.matched && !iconOne && !iconTwo) {
      setIconOne(icon);
    } else if (!icon.matched && iconOne && !iconTwo && icon.id !== iconOne.id) {
      setIconTwo(icon);
    }
  };

  const initGame = () => {
    const cards = cardsNumber;
    const allIcons = [...iconsSet, ...iconsSet]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards)
      .map((icon) => ({ ...icon, id: Math.random() }));
    setIcons(allIcons);
  };

  useEffect(() => initGame(), []);

  useEffect(() => {
    if (noOfMatched === iconsSet.length) {
      setFinished(true);
    }

    if (iconOne && iconTwo) {
      if (iconOne.source === iconTwo.source) {
        setNoOfMatched((no) => (no += 1));
        setIcons((prevIcons) => {
          return prevIcons.map((icon) => {
            if (icon.source === iconOne.source) {
              return { ...icon, matched: true };
            } else {
              return icon;
            }
          });
        });
      }
      setTimeout(() => {
        setIconOne(null);
        setIconTwo(null);
      }, 300);
    }
  }, [iconOne, iconTwo]);

  const calcTime = () => {
    const currentTime = Date.now();
    const timeResult = Math.floor((currentTime - time) / 1000);
    return timeResult;
  };

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container variant='basic'>
          {finished ? (
            <WinBoard resultTime={calcTime()} navigation={navigation} />
          ) : (
            <>
              {icons.length ? (
                <Center style={styles.boardGameContainer}>
                  <View style={styles.boardGame}>
                    {icons.map((icon, key) => {
                      return (
                        <Card
                          level={level}
                          key={key}
                          handleCard={handleCard}
                          flipped={
                            icon === iconOne || icon === iconTwo || icon.matched
                          }
                          icon={icon}
                        />
                      );
                    })}
                  </View>
                </Center>
              ) : (
                <></>
              )}
            </>
          )}
        </Container>
      </Center>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  boardGameContainer: {
    width: '100%',
    height: '100%',
  },
  boardGame: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
});
