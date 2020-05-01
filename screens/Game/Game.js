import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Shared
import DefaultStyle from '../../shared/styles/default';

// Components
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import Card from '../../components/Card/Card';
import MainButton from '../../components/MainButton/MainButton';

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

const renderListItems = (value, number) => (
    <View key={value} style={styles.listItem}>
        <Text style={DefaultStyle.bodyText}>
            #{number}
        </Text>
        <Text style={DefaultStyle.bodyText}>
            {value}
        </Text>
    </View>
);

const Game = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(pastGuesses.length);
        }
    }, [onGameOver, currentGuess, userNumber]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(
                'Don\'t lie!',
                'You know this is wrong...',
                [{ text: 'Sorry', style: 'cancel' }]
            );
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );

        setCurrentGuess(nextNumber);
        setPastGuesses(pastGuesses => [nextNumber, ...pastGuesses])
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyle.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card style={styles.btnContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" />
                </MainButton>
            </Card>

            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((pastGuess, index) => renderListItems(pastGuess, pastGuesses.length - index))}
                </ScrollView>
            </View>
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
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '90%'
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '80%' : '90%'
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default Game;