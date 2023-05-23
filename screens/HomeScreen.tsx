import * as React from 'react';
import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
  Button,
} from 'native-base';

export const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Container
          alignItems='center'
          h='100%'
          w='100%'
          maxWidth='100%'
          bg='#49404F'
        >
          <Heading color='emerald.600'>
            Game <Text color='emerald.500'>Center</Text>
          </Heading>
          <Button fontSize={30} bg='#4989b6' h='5%' w='60%'>
            PLAY
          </Button>
          <Button bg='#4989b6' h='5%' w='60%'>
            ABOUT
          </Button>
          <Button bg='#4989b6' h='5%' w='60%'>
            SETTINGS
          </Button>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};
