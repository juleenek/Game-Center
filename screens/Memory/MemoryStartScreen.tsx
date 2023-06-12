import * as React from 'react';
import { Container, Text, Center, Button, Image, Heading } from 'native-base';
import { ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  IMAGE_BACKGROUND_SOURCE,
  IMAGE_LOGO_SOURCE,
} from '../../utils/_shared';
import { MemoryLevels } from '../../utils/enums/levels.enum';
import { AppStackParamList } from '../../navigation/AppNavigator';

const BUTTONS_FONT_SIZE = '2xl';

export type Props = NativeStackScreenProps<AppStackParamList, 'MemoryStart'>;

export const MemoryStartScreen = (props: Props) => {
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
            marginTop={35}
            marginBottom={-35}
            alt='Logo'
          />
          <Heading fontSize='3xl' variant='basic' marginTop={35}>
            Choose a difficulty level:
          </Heading>
          <Button
            variant='homeBlue'
            onPress={() => navigate('MemoryGame', { level: MemoryLevels.EASY })}
            testID='easy-button'
          >
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              EASY
            </Text>
          </Button>
          <Button
            variant='homeBlue'
            onPress={() =>
              navigate('MemoryGame', { level: MemoryLevels.MEDIUM })
            }
            testID='medium-button'
          >
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              MEDIUM
            </Text>
          </Button>
          <Button
            variant='homeBlue'
            onPress={() => navigate('MemoryGame', { level: MemoryLevels.HARD })}
            testID='hard-button'
          >
            <Text variant='textButton' fontSize={BUTTONS_FONT_SIZE}>
              HARD
            </Text>
          </Button>
        </Container>
      </Center>
    </ImageBackground>
  );
};
