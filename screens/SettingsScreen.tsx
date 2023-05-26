import * as React from "react";
import {
  Container,
  Text,
  Center,
  Button,
  Image,
  Heading,
  Slider,
} from "native-base";
import { ImageBackground } from "react-native";

export const SettingsScreen = () => {
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
          <Container alignItems="center" variant="settings">
            <Slider defaultValue={100} colorScheme="indigo">
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Container>
        </Container>
      </Center>
    </ImageBackground>
  );
};
