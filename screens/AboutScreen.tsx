import React from "react";
import {
  Container,
  Text,
  Center,
  Image,
  Heading,
  Flex,
  Switch,
} from "native-base";
import { ImageBackground } from "react-native";

export const AboutScreen = () => {

  return (
    <ImageBackground
      source={require("../assets/moon.jpg")}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems="center" variant="basic">
          <Image
            source={require("../assets/game_logo.png")}
            size={200}
            marginTop={35}
            marginBottom={-35}
            alt="Logo"
          />
          <Container alignItems="center" variant="setAb">
            <Heading fontSize="3xl" variant="basic">
              About
            </Heading>
            <Heading fontSize="3xl" variant="basic" >
              _________________
            </Heading>
            <Text
            fontSize='sm'
            color='white.100'
            fontFamily='Aldrich_400Regular'
            marginTop={35}
          >
            Mobile games application made by
          </Text>
          <Text
            fontSize='sm'
            color='white.100'
            fontFamily='Aldrich_400Regular'
          >
            Julia Linek & Konrad Barszcz
          </Text>
          </Container>
        </Container>
      </Center>
    </ImageBackground>
  );
};
