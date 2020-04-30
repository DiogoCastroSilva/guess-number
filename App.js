import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import StartGame from './screens/StartGame/StartGame';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
