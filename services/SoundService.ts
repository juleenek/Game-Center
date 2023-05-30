import { Audio } from 'expo-av';
export const SoundService = {
  soundInstance: null as Audio.Sound | null,

  async playMusic() {
    try {
      if (this.soundInstance) {
        const status = await this.soundInstance.getStatusAsync();
        if (status.isLoaded && status.positionMillis > 0) {
          return;
        }
        await this.soundInstance.playAsync();
      } else {
        const { sound } = await Audio.Sound.createAsync(
          require("../assets/background-music.mp3"),
          { shouldPlay: true, isLooping: true, volume: 1 }
        );
        this.soundInstance = sound;
      }
    } catch (error) {
      console.error("Error playing music:", error);
    }
  },
  
  

  async stopMusic() {
    try {
      if (this.soundInstance) {
        await this.soundInstance.stopAsync();
        this.soundInstance = null;
      }
    } catch (error) {
      console.error("Error stopping music:", error);
    }
  },

  async isPlaying() {
    try {
      if (this.soundInstance) {
        const status = await this.soundInstance.getStatusAsync();
        return status && status.isLoaded && status.isPlaying && !status.isBuffering;
      }
    } catch (error) {
      console.error("Error checking music status:", error);
    }
    return false;
  }
  
};
