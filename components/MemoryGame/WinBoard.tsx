import * as React from 'react';
import {
  Container,
  Text,
  Flex,
  Center,
  Box,
  Heading,
  Button,
} from 'native-base';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  resultTime: number;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
};

function format(time: number) {
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  var ret = '';
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  ret += '' + String(mins).padStart(2, '0') + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
}

export const WinBoard = (props: Props) => {
  const { resultTime, navigation } = props;
  console.log(resultTime);

  return (
    <Center>
      <Container alignItems='center' w='300' h='100%' bg='#372d3f'>
        <Text
          fontSize='3xl'
          variant='textButton'
          marginTop={35}
          marginBottom={5}
        >
          - YOU WIN! -
        </Text>
        <Text fontSize='2xl' variant='textButton' marginTop={35}>
          Your time:
        </Text>
        <Text fontSize='2xl' variant='textButton' marginTop={35}>
          {format(resultTime)}
        </Text>
        <Text fontSize='2xl' variant='textButton' marginTop={35}>
          Your points:
        </Text>
        <Text fontSize='2xl' variant='textButton' marginTop={35}>
          2137
        </Text>
        <Button variant='homeBlue' bg='#815c9f'>
          <Text variant='textButton'>SCORES</Text>
        </Button>
        <Button variant='homeBlue' onPress={() => navigation.navigate('Home')}>
          <Text variant='textButton'>HOME</Text>
        </Button>
      </Container>
    </Center>
  );
};
