import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';

// Components
import Header from './components/Header/Header';
import StartGame from './screens/StartGame/StartGame';
import Game from './screens/Game/Game';
import GameOver from './screens/GameOver/GameOver';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold')
  });
};

export default function App() {
  // State
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoded, setDataLoaded] = useState(false);

  // Logic
  if (!dataLoded) {
    return <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />;
  }

  const startNewGame = () => {
    setNumberOfRounds(0);
    setUserNumber();
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumberOfRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setNumberOfRounds(numberOfRounds);
  };

  let Content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && numberOfRounds <= 0) {
    Content = <Game
                  userNumber={userNumber}
                  onGameOver={gameOverHandler}
              />
  } else {
    Content = <GameOver
                numberOfRounds={numberOfRounds}
                userNumber={userNumber}
                startNewGame={startNewGame}
              />;
  }

  // Component
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {Content}
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
