import * as React from 'react';
import { Container, Text, Center, Button, Image } from 'native-base';

export const HomeScreen = () => {
  return (
    <Center>
      <Container
        alignItems='center'
        h='100%'
        w='100%'
        maxWidth='100%'
        bg='#49404F'
      >
        <Image
          source={require('../assets/game_logo.png')}
          size={200}
          alt='Logo'
        />
        <Button variant='homeBlue'>
          <Text bold fontSize='2xl' color='white.100'>
            PLAY
          </Text>
        </Button>
        <Button variant='homeBlue'>
          <Text bold fontSize='2xl' color='white.100'>
            ABOUT
          </Text>
        </Button>
        <Button variant='homeGray'>
          <Text bold fontSize='2xl' color='white.100'>
            SETTINGS
          </Text>
        </Button>
      </Container>
    </Center>
  );
};
