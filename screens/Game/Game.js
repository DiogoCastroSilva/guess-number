import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import Card from '../../components/Card/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    if (rnd === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rnd;
    }
};

const Game = ({ userNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userNumber)
    );
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Button title="LOWER" />
                <Button title="GREATER" />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default Game;