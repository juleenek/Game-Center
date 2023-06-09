import * as React from 'react';
import { Container, Text, Center, Button, Image, Heading } from 'native-base';
import { ImageBackground } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IMAGE_BACKGROUND_SOURCE, IMAGE_LOGO_SOURCE } from '../utils/_shared';

const BUTTONS_FONT_SIZE = '2xl';

export type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

export const HomeScreen = (props: Props) => {
  const { navigate } = props.navigation;

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode='cover'
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems='center' variant='basic'>
          <Image
            source={IMAGE_LOGO_SOURCE}
            size={200}
            marginTop={15}
            marginBottom={-35}
            alt='Logo'
            testID='logo-image'
          />
          <Heading fontSize='4xl' variant='basic'>
            Game Center
          </Heading>
          <Heading fontSize='3xl' variant='basic' marginTop={35}>
            - GAMES -
          </Heading>
          <Button variant='homeBlue' onPress={() => navigate('MemoryStart')} testID='memory-button'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              MEMORY
            </Text>
          </Button>
          <Heading fontSize='3xl' variant='basic' marginTop={1}>
            _________________
          </Heading>

          <Button variant='homeBlue' onPress={() => navigate('About')} testID='about-button'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              ABOUT
            </Text>
          </Button>
          <Button variant='homeGray' onPress={() => navigate('Settings')} testID='settings-button'>
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              SETTINGS
            </Text>
          </Button>
          <Text
            fontSize='sm'
            color='#8876947d'
            fontFamily='Aldrich_400Regular'
            marginTop={35}
          >
            ©{new Date().getFullYear()} by Julia Linek and Konrad Barszcz
          </Text>
        </Container>
      </Center>
    </ImageBackground>
  );
};
