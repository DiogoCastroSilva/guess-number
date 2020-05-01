import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import StartGame from './screens/StartGame/StartGame';
import Game from './screens/Game/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let Content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber) {
    Content = <Game  userNumber={userNumber} />
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
