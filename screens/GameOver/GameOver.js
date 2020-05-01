import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Shared
import Colors from '../../shared/styles/colors';
import DefaultStyle from '../../shared/styles/default';

const GameOver = ({
    numberOfRounds,
    userNumber,
    startNewGame
}) => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyle.title}>This is Game Over!</Text>
            <Text style={DefaultStyle.bodyText}>Number of Rounds: {numberOfRounds}</Text>
            <Text style={DefaultStyle.bodyText}>The number was {userNumber}</Text>
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