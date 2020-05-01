import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import StartGame from './screens/StartGame/StartGame';
import Game from './screens/Game/Game';
import GameOver from './screens/GameOver/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

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

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {Content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
