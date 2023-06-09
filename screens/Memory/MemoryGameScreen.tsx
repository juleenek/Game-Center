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
import { MemoryLevels } from "../../utils/enums/levels.enum";

type Props = NativeStackScreenProps<AppStackParamList, "MemoryGame">;
const EASY_CARDS_NUMBER = 6;
const MEDIUM_CARDS_NUMBER = 8;
const HARD_CARDS_NUMBER = 12;

export const MemoryGameScreen = ({ route, navigation }: Props) => {
  

  const [finished, setFinished] = useState(false);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [iconOne, setIconOne] = useState<Icon | null>(null);
  const [iconTwo, setIconTwo] = useState<Icon | null>(null);
  const [noOfMatched, setNoOfMatched] = useState(0);
  const time = Date.now();
  const { level } = route.params;
 
  let cardsNumber: number;
 
  switch (level) {
    case MemoryLevels.EASY:
      cardsNumber = EASY_CARDS_NUMBER;
      break;
    case MemoryLevels.MEDIUM:
      cardsNumber = MEDIUM_CARDS_NUMBER;
      break;
    case MemoryLevels.HARD:
      cardsNumber = HARD_CARDS_NUMBER;
      break;
  }
  const iconsSet = IconsService.cards
  .sort(() => Math.random() - 0.5)
  .slice(0, cardsNumber / 2);

  const handleCard = (icon: Icon) => {
    if (!icon.matched && !iconOne && !iconTwo) {
      setIconOne(icon);
    } else if (
      !icon.matched &&
      iconOne &&
      !iconTwo &&
      icon.id !== iconOne.id
    ) {
      setIconTwo(icon);
    }
  };

  const initGame = () => {
     const cards = cardsNumber;
    const allIcons = [...iconsSet, ...iconsSet]
      .sort(() => Math.random() - 0.5)
      .slice(0, cards)
      .map((icon) => ({ ...icon, id: Math.random() }));
    setIcons(allIcons);
  };

  useEffect(() => initGame(), []);

  useEffect(() => {
    if (noOfMatched === iconsSet.length) {
      setFinished(true);
    }

    if (iconOne && iconTwo) {
      if (iconOne.source === iconTwo.source) {
        setNoOfMatched((no) => (no += 1));
        setIcons((prevIcons) => {
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
    return timeResult
  };

  return (
    <ImageBackground
      source={IMAGE_BACKGROUND_SOURCE}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <Center>
        <Container alignItems="center" variant="basic">
          {finished ? (
            <WinBoard resultTime={calcTime()} navigation={navigation} />
          ) : (
            <>
              <View style={styles.memoryBoardContainer}>
                <View style={styles.memoryBoard}>
                  <View>
                    {icons.length ? (
                      <View style={styles.gameBlock}>
                        {icons.map((icon, key) => {
                          return (
                            <Card
                              level={level}
                              key={key}
                              handleCard={handleCard}
                              flipped={
                                icon === iconOne ||
                                icon === iconTwo ||
                                icon.matched
                              }
                              icon={icon}
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
