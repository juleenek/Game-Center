import * as React from 'react';
import { Container, Text, Center, Button, Image, Heading } from 'native-base';
import { ImageBackground } from 'react-native';

const BUTTONS_FONT_SIZE = '2xl';

export const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/moon.jpg')}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container
          alignItems='center'
          h='100%'
          w='100%'
          maxWidth='100%'
          bg='#2f1d3bb8'
        >
          <Image
            source={require('../assets/game_logo.png')}
            size={200}
            marginTop={35}
            marginBottom={-35}
            alt='Logo'
          />
          <Heading
            fontSize='4xl'
            color='white.100'
            fontFamily='Aldrich_400Regular'
          >
            Game Center
          </Heading>
          <Button variant='homeBlue'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              PLAY
            </Text>
          </Button>
          <Button variant='homeBlue'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              ABOUT
            </Text>
          </Button>
          <Button variant='homeGray'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              SETTINGS
            </Text>
          </Button>
        </Container>
      </Center>
    </ImageBackground>
  );
};
