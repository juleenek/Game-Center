import * as React from "react";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Container, Center } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppNavigator";
import { Card } from "../../components/MemoryGame/Card";
import { WinBoard } from "../../components/MemoryGame/WinBoard";
import { IconsService, Icon } from "../../services/IconsService";
import { IMAGE_BACKGROUND_SOURCE } from "../../utils/_shared";

type Props = NativeStackScreenProps<AppStackParamList, "MemoryGame">;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  const icons = IconsService.cards
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState<Icon[]>([]);
  const [iconOne, setIconOne] = useState<Icon | null>(null);
  const [iconTwo, setIconTwo] = useState<Icon | null>(null);
  const [noOfMatched, setNoOfMatched] = useState(0);
  const [time, _] = useState(Date.now());
  const { level } = route.params;

  const chooseCard = (image: Icon) => {
    if (!image.matched && !iconOne && !iconTwo) {
      setIconOne(image);
    } else if (
      !image.matched &&
      iconOne &&
      !iconTwo &&
      image.id !== iconOne.id
    ) {
      setIconTwo(image);
    }
  };

  const initGame = () => {
    const cards = 6;
    const allImages = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards)
      .map((icon) => ({ ...icon, id: Math.random() }));
    setImages(allImages);
  };

  useEffect(() => initGame(), []);

  useEffect(() => {
    if (noOfMatched === icons.length) {
      setModalVisible(true);
    }

    if (iconOne && iconTwo) {
      if (iconOne.source === iconTwo.source) {
        setNoOfMatched((no) => (no += 1));
        setImages((prevIcons) => {
          return prevIcons.map((icon) => {
            if (icon.source === iconOne.source) {
              return { ...icon, matched: true };
            } else {
              return icon;
            }
          });
        });
      }
      setTimeout(() => {
        setIconOne(null);
        setIconTwo(null);
      }, 300);
    }
  }, [iconOne, iconTwo]);

  const calcTime = () => {
    const currentTime = Date.now();
    const timeResult = Math.floor((currentTime - time) / 1000);
    return timeResult;
  };

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems="center" variant="basic">
          {modalVisible ? (
            <WinBoard resultTime={calcTime()} navigation={navigation} />
          ) : (
            <>
              <View style={styles.memoryBoardContainer}>
                <View style={styles.memoryBoard}>
                  <View>
                    {images.length ? (
                      <View style={styles.gameBlock}>
                        {images.map((image, key) => {
                          return (
                            <Card
                              level={level}
                              key={key}
                              chooseCard={chooseCard}
                              flipped={
                                image === iconOne ||
                                image === iconTwo ||
                                image.matched
                              }
                              image={image}
                            />
                          );
                        })}
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate("MemoryStart")}
              >
                <Text style={styles.buttonsText}>
                  Go back to level selection
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Container>
      </Center>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    backgroundColor: "#f4a44e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 20,
  },
  buttonsText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  memoryBoardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  memoryBoard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 24,
    height: 100,
  },
  gameBlock: {
    justifyContent: "center",
    flexBasis: "80%",
    flexWrap: "wrap",
    margin: 120,
    padding: 30,
  },
});
