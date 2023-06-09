import * as React from 'react';
import { Container  } from 'native-base';
import { MemoryLevels } from '../../utils/enums/levels.enum';
import { useState, useEffect } from 'react';
import { getCardsSize } from '../../utils/_generators';
import { Icon } from '../../services/IconsService';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BACK_CARD_IMAGE } from '../../utils/_shared'

type Props = {
  handleCard(icon: Icon): void;
  level: MemoryLevels;
  flipped: boolean;
  icon: Icon;
};

export const Card = (props: Props) => {
  const { level, flipped, icon, handleCard } = props;
  const sizes = getCardsSize(level);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);

  const cardClickHandle = () => {
    if (!flipped && !isFlipped) {
      setIsFlipped(true);
      handleCard(icon);
    }
  };

  const resetCard = () => {
    setIsFlipped(false);
  };

  useEffect(() => {
    if (flipped && !isFlipped) {
      const timeout = setTimeout(resetCard, 1500);
      return () => clearTimeout(timeout);
    }
  }, [flipped, isFlipped]);

  const generate = () => {
    if (flipped && isFlipped) {
      return (
        <Image
          style={styles.cardImageEasy}
          source={icon.source}
          resizeMode='contain'
          alt='icon'
        />
      );
    }
    if (!flipped && !isFlipped) {
      return <Image
        style={styles.questionMark}
        source={BACK_CARD_IMAGE}
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
