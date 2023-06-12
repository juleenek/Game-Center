import React, { useEffect, useState } from "react";
import {
  Container,
  Text,
  Center,
  Image,
  Heading,
  Flex,
  Spacer,
  Switch,
} from "native-base";
import { ImageBackground } from "react-native";
import { SoundService } from "../services/SoundService";

export const SettingsScreen = () => {
  const [musicEnabled, setMusicEnabled] = useState(true); 

  useEffect(() => {
    const checkMusicStatus = async () => {
      const isPlaying = await SoundService.isPlaying();
      setMusicEnabled(isPlaying);
    };
    checkMusicStatus();
  }, []);

  const handleMusicToggle = async (isEnabled: boolean) => {
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
          <Container alignItems="center" variant="settings" marginTop={10}>
            <Heading fontSize="3xl" variant="basic" marginTop='8'>
              Settings
            </Heading>
            <Heading fontSize="3xl" variant="basic" paddingBottom="7">
              _________________
            </Heading>
            <Flex variant="row">
              <Heading fontSize="2xl" variant="basic" marginRight="7" >
                Music
              </Heading>
              <Switch
                size="lg"
                color="#337e88"
                isChecked={musicEnabled}
                onToggle={handleMusicToggle}
              />
              <Text variant="textValue">{getSwitchText()}</Text>
            </Flex>
          </Container>
        </Container>
      </Center>
    </ImageBackground>
  );
};
