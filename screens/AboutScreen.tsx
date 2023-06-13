import React from 'react';
import {
  Container,
  Text,
  Center,
  Image,
  Heading,
  Flex,
  Switch,
  Button,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Linking } from 'react-native';

export const AboutScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/moon.jpg')}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          <Image
            source={require('../assets/game_logo.png')}
            size={200}
            marginTop={1}
            marginBottom={-25}
            alt='Logo'
            testID='logo-image'
          />
          <Container alignItems='center' variant='about'>
            <Heading fontSize='3xl' variant='basic'>
              About
            </Heading>
            <Heading fontSize='3xl' variant='basic'>
              _________________
            </Heading>
            <Text
              fontSize='md'
              color='#e5e5e5'
              fontFamily='Aldrich_400Regular'
              textAlign='center'
              marginTop='10'
            >
              Gra Memory można zagrać na trzech poziomach trudności: łatwy,
              średni i trudny. Poziomy różnią się ilością kart. Od początku gry
              jest liczony czas aby gracz po wygranej zobaczył swój wynik.
            </Text>
            <Text
              fontSize='sm'
              color='#e5e5e5'
              fontFamily='Aldrich_400Regular'
              marginTop='10'
              textAlign='center'
            >
              Creators
            </Text>
            <Text
              fontSize='sm'
              color='#e5e5e5'
              fontFamily='Aldrich_400Regular'
              textAlign='center'
              marginBottom={5}
            >
              Julia Linek & Konrad Barszcz
            </Text>
            <Button
              leftIcon={
                <Ionicons name='logo-github' size={25} color='#e5e5e5' />
              }
              color='#337e88'
              width='140'
              shadow='5'
              onPress={() => {
                Linking.openURL('https://github.com/juleenek/Game-Center');
              }}
              testID='github-button'
            >
              <Text
                fontSize='lg'
                color='#e5e5e5'
                fontFamily='Aldrich_400Regular'
              >
                Github
              </Text>
            </Button>
          </Container>
        </Container>
      </Center>
    </ImageBackground>
  );
};
