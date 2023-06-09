import * as React from 'react';
import { Container, Pressable } from 'native-base';
import { MemoryLevels } from '../../utils/enums/levels.enum';
import { useState, useEffect } from 'react';
import { getCardsSize } from '../../utils/_generators';
import { Icon } from '../../services/IconsService';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

type Props = {
  chooseCard(image: Icon): void;
  level: MemoryLevels;
  flipped: boolean;
  image: Icon;
};

export const Card = (props: Props) => {
  const { level, flipped, image, chooseCard } = props;
  const sizes = getCardsSize(level);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);

  const cardClickHandle = () => {
    if (!flipped && !isFlipped) {
      setIsFlipped(true);
      chooseCard(image);
    }
  };

  const resetCard = () => {
    setIsFlipped(false);
  };

  const questionMark = require('../../assets/cart-back.png');

  useEffect(() => {
    if (flipped && !isFlipped) {
      const timeout = setTimeout(resetCard, 1000); // Zresetuj kartę po 1 sekundzie
      return () => clearTimeout(timeout);
    }
    console.log(`flipped: ${flipped}, isFlipped: ${isFlipped}`);
  }, [flipped, isFlipped]);

  const generate = () => {
    if (flipped && isFlipped) {
      return (
        <Image
          testID='question-mark-image'
          style={styles.cardImageEasy}
          source={image.source}
          resizeMode='contain'
          alt='icon'
        />
      );
    }
    if (!flipped && !isFlipped) {
      return <Image
        style={styles.questionMark}
        source={questionMark}
        resizeMode='contain'
        alt='icon'
      />;
    }
  };

  return (
    <Container>
      <TouchableOpacity
        onPress={cardClickHandle}
        style={[styles.cardEasy, flipped ? styles.matched : null]}
      >
        {generate()}
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardEasy: {
    width: 100,
    height: 120,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transitionProperty: 'transform',
    transitionDuration: '.7s',
    cursor: 'pointer',
    margin: 5,
  },
  cardMedium: {
    width: 80,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transitionProperty: 'transform',
    transitionDuration: '.7s',
    cursor: 'pointer',
    margin: 5,
  },
  cardHard: {
    width: 60,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transitionProperty: 'transform',
    transitionDuration: '.7s',
    cursor: 'pointer',
    margin: 3,
  },
  matched: {
    transform: [{ rotateY: '180deg' }],
  },
  questionMark: {
    width: 60,
    height: 60,
  },
  cardImageEasy: {
    width: 80,
    height: 80,
  },
  cardImageMedium: {
    width: 70,
    height: 70,
  },
  cardImageHard: {
    width: 50,
    height: 50,
  },
});
