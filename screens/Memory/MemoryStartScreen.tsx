import * as React from 'react';
import { Container, Text, Center, Button, Image, Heading } from 'native-base';
import { ImageBackground } from 'react-native';
import { IMAGE_BACKGROUND_SOURCE } from '../../utils/_shared';

const BUTTONS_FONT_SIZE = '2xl';

export const MemoryStartScreen = () => {
  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          <Image
            source={require('../../assets/game_logo.png')}
            size={200}
            marginTop={35}
            marginBottom={-35}
            alt='Logo'
          />
          <Heading fontSize='3xl' variant='basic' marginTop={35}>
            Choose a difficulty level:
          </Heading>
          <Button variant='homeBlue'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              EASY
            </Text>
          </Button>
          <Button variant='homeBlue'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              MEDIUM
            </Text>
          </Button>
          <Button variant='homeBlue'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              HARD
            </Text>
          </Button>
        </Container>
      </Center>
    </ImageBackground>
  );
};
