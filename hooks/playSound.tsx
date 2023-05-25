import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export function PlaySound(){
    
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [finish, setFinish] = useState<boolean>(true);

    const playSound = async () => {
        const source = require("../assets/background-music.mp3");
        const { sound } = await Audio.Sound.createAsync(source,
          {
            shouldPlay: true,
            isLooping: true,
            volume: 0.01 //temporary testing
          }
        );
        setSound(sound);
        if (sound != null) {
          await sound.playAsync();
          setIsPlaying(true)
    
        }
          else console.log("Sound not found.");
      };
    
      const stopSound = async () => {
        if (sound != null) await sound.stopAsync();
        else console.log("Sound not found");
      };
    
      useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
}

