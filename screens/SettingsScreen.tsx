import React, { useEffect, useState } from "react";
import { Container, Text, Center, Image, Heading, Flex, Spacer, Switch } from "native-base";
import { ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { SoundService } from "../services/SoundService";

export const SettingsScreen = () => {
  const [musicEnabled, setMusicEnabled] = useState(true); // Set the initial state to true

  useEffect(() => {
    // Check the current status of music playback and update the switch state
    const checkMusicStatus = async () => {
      const isPlaying = await SoundService.isPlaying();
      setMusicEnabled(isPlaying);
    };
    checkMusicStatus();
  }, []);

  const handleMusicToggle = async (isEnabled) => {
    setMusicEnabled(isEnabled);
    if (isEnabled) {
      await SoundService.playMusic();
    } else {
      await SoundService.stopMusic();
    }
  };

  const getSwitchText = () => {
    return musicEnabled ? "On" : "Off";
  };

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
            <Heading fontSize="3xl" variant="basic">
              Volume
            </Heading>
            <Flex variant="row">
              <Switch
                size="lg"
                colorScheme="indigo"
                isChecked={musicEnabled}
                onToggle={handleMusicToggle}
              />
              <Spacer />
              <Text variant="textValue">{getSwitchText()}</Text>
            </Flex>
          </Container>
        </Container>
      </Center>
    </ImageBackground>
  );
};
