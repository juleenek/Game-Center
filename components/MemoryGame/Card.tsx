import * as React from 'react';
import { Container } from 'native-base';
import { MemoryLevels } from '../../utils/enums/levels.enum';
import { useState, useEffect } from 'react';
import { Icon } from '../../services/IconsService';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BACK_CARD_IMAGE } from '../../utils/_shared';

type Props = {
  handleCard(icon: Icon): void;
  level: MemoryLevels;
  flipped: boolean;
  icon: Icon;
};

export const Card = (props: Props) => {
  const { level, flipped, icon, handleCard } = props;

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
          style={styles.cardImage}
          source={icon.source}
          resizeMode='contain'
          alt='icon'
        />
      );
    }
    if (!flipped && !isFlipped) {
      return (
        <Image
          style={styles.cardImage}
          source={BACK_CARD_IMAGE}
          resizeMode='contain'
          alt='icon'
        />
      );
    }
  };

  return (
    <Container margin={5} testID='card'>
      <TouchableOpacity
        onPress={cardClickHandle}
        style={[styles.card, flipped ? styles.matched : null]}
      >
        {generate()}
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transitionProperty: 'transform',
    transitionDuration: '.7s',
    backgroundColor: '#31263886',
  },
  matched: {
    transform: [{ rotateY: '180deg' }],
  },
  cardImage: {
    width: 80,
    height: 80,
  },
});
