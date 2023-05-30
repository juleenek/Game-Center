import React from "react";
import {
  Container,
  Text,
  Center,
  Image,
  Heading,
  Flex,
  Switch,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Linking } from "react-native";

export const AboutScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/moon.jpg")}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems="center" variant="basic">
          <Image
            source={require("../../assets/game_logo.png")}
            size={200}
            marginTop={35}
            marginBottom={-35}
            alt="Logo"
          />
          <Container alignItems="center" variant="about">
            <Heading fontSize="3xl" variant="basic" marginTop="8">
              About
            </Heading>
            <Heading fontSize="3xl" variant="basic">
              _________________
            </Heading>
            <Text
              fontSize="md"
              color="white.100"
              fontFamily="Aldrich_400Regular"
              textAlign="center"
              marginTop="10"
            >
              Android & iOS application featuring a memory game
            </Text>
            <Text
              fontSize="sm"
              color="white.100"
              fontFamily="Aldrich_400Regular"
              marginTop="10"
              textAlign="center"
            >
              Creators
            </Text>
            <Text
              fontSize="sm"
              color="white.100"
              fontFamily="Aldrich_400Regular"
              textAlign="center"
            >
              Julia Linek & Konrad Barszcz
            </Text>
            <Text
              fontSize="sm"
              color="white.100"
              fontFamily="Aldrich_400Regular"
              marginTop="10"
              marginBottom="5"
            >
              Version 1.0.0
            </Text>
            <Button
              leftIcon={
                <Ionicons name="logo-github" size={25} color="#e5e5e5" />
              }
              color="#337e88"
              width="140"
              shadow='5'
              onPress={() => {
                Linking.openURL("https://github.com/juleenek/Game-Center");
              }}
            >
              <Text
                fontSize="lg"
                color="white.100"
                fontFamily="Aldrich_400Regular"
                
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
