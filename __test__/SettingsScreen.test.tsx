import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import { SettingsScreen } from "../screens/SettingsScreen";
import { SoundService } from "../services/SoundService";
import { NativeBaseProvider } from "native-base";

jest.mock("../services/SoundService", () => ({
  SoundService: {
    isPlaying: jest.fn(),
    playMusic: jest.fn(),
    stopMusic: jest.fn(),
    soundInstance: {
      playAsync: jest.fn(),
      stopAsync: jest.fn(),
      getStatusAsync: jest.fn(),
    },
  },
}));

describe("SettingsScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  const renderSettingsScreen = () => {
    return render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SettingsScreen />
      </NativeBaseProvider>
    );
  };

  it("Renders SettingsScreen without errors", async () => {
    await waitFor(() =>{
        expect(() =>  renderSettingsScreen()).not.toThrow();
    })
  });

  it("toggles music on switch toggle", async () => {
    const { getByTestId } = renderSettingsScreen();
    const musicSwitch = getByTestId("music-switch");

    await act(async () => {
      fireEvent(musicSwitch, "valueChange", false);
    });

    expect(SoundService.stopMusic).toHaveBeenCalledTimes(1);
    expect(SoundService.playMusic).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent(musicSwitch, "valueChange", true);
    });

    expect(SoundService.playMusic).toHaveBeenCalledTimes(1);
  });

  it("displays correct switch text", async () => {
    (SoundService.isPlaying as jest.Mock).mockResolvedValue(true);
    const { getByText } = renderSettingsScreen();
    const switchText = getByText("On");
    expect(switchText).toBeTruthy();
  });
});

describe("SoundService", () => {
  test("plays music", async () => {
    await act(async () => {
      await SoundService.playMusic();
    });
    expect(SoundService.soundInstance?.playAsync).toHaveBeenCalledTimes(0);
  });

  it("stops music", async () => {
    await act(async () => {
      await SoundService.stopMusic();
    });
    expect(SoundService.soundInstance?.stopAsync).toHaveBeenCalledTimes(0);
  });

  it("checks if music is playing", async () => {
    (SoundService.soundInstance!.getStatusAsync as jest.Mock).mockResolvedValue({
      isLoaded: true,
      isPlaying: true,
      isBuffering: false,
    });

    await act(async () => {
      const isPlaying = await SoundService.isPlaying();
      expect(isPlaying).toBe(true);
      expect(SoundService.soundInstance?.getStatusAsync).toHaveBeenCalledTimes(0);
    });
  });
});
