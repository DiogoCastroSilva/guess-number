import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../../shared/styles/colors';

const GameOver = ({
    numberOfRounds,
    userNumber,
    startNewGame
}) => {
    return (
        <View style={styles.screen}>
            <Text>This is Game Over!</Text>
            <Text>Number of Rounds: {numberOfRounds}</Text>
            <Text>The number was {userNumber}</Text>
            <Button
                title='New Game'
                onPress={startNewGame}
                color={Colors.primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOver;