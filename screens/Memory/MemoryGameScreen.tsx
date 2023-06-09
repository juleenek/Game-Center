import * as React from 'react';
import { Container, Center } from 'native-base';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { IconsService, Icon } from '../../services/IconsService';
import { Card } from '../../components/MemoryGame/Card';
import { WinBoard } from '../../components/MemoryGame/WinBoard';
import { MemoryLevels } from '../../utils/enums/levels.enum';

type Props = NativeStackScreenProps<AppStackParamList, 'MemoryGame'>;
const EASY_CARDS_NUMBER = 6;
const MEDIUM_CARDS_NUMBER = 8;
const HARD_CARDS_NUMBER = 12;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState<Icon[]>([]);
  const [imageOne, setImageOne] = useState<Icon | null>(null);
  const [imageTwo, setImageTwo] = useState<Icon | null>(null);
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

  const imagesItems = IconsService.cards
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, cardsNumber / 2);

  const chooseCard = (image: Icon) => {
    if (!image.matched && !imageOne && !imageTwo) {
      setImageOne(image);
    } else if (
      !image.matched &&
      imageOne &&
      !imageTwo &&
      image.id !== imageOne.id
    ) {
      setImageTwo(image);
    }
  };

  const initGame = () => {
    const cards = cardsNumber;
    const allImages = [...imagesItems, ...imagesItems]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards)
      .map((item) => ({ ...item, id: Math.random() }));
    setImages(allImages);
  };

  useEffect(() => initGame(), []);

  useEffect(() => {
    if (noOfMatched === imagesItems.length) {
      setModalVisible(true);
    }

    if (imageOne && imageTwo) {
      if (imageOne.source === imageTwo.source) {
        setNoOfMatched((no) => (no += 1));
        setImages((prevImages) => {
          return prevImages.map((item) => {
            if (item.source === imageOne.source) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
      }
      setTimeout(() => {
        setImageOne(null);
        setImageTwo(null);
      }, 300);
    }
  }, [imageOne, imageTwo]);

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          {modalVisible ? (
            <WinBoard resultTime={time} navigation={navigation}></WinBoard>
          ) : (
            <>
              <View style={styles.memoryBoardContainer}>
                <View style={styles.memoryBoard}>
                  <View>
                    {images.length ? (
                      <View style={styles.gameBlock}>
                        {images.map((image, key) => {
                          return (
                            <Card
                              level={level}
                              key={key}
                              chooseCard={chooseCard}
                              flipped={
                                image === imageOne ||
                                image === imageTwo ||
                                image.matched
                              }
                              image={image}
                            />
                          );
                        })}
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </View>
            </>
          )}
        </Container>
      </Center>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttons: {
    backgroundColor: '#f4a44e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 20,
  },
  buttonsText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  memoryBoardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoryBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 24,
    height: 100,
  },
  gameBlock: {
    justifyContent: 'center',
    flexBasis: '80%',
    flexWrap: 'wrap',
    margin: 120,
    padding: 30,
  },
});
