import React, { useState, useRef, useEffect, Fragment } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';

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
    ScreenOrientation.lockAsync();
    
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [availableWidth, setAvailableWidth] = useState(Dimensions.get('window').width);
    const [availableHeight, setAvailableHeight] = useState(Dimensions.get('window').height);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const updateLayout = () => {
        setAvailableWidth(Dimensions.get('window').width);
        setAvailableHeight(Dimensions.get('window').height);
    };

    useEffect(() => {
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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

    const controls = availableHeight < 500 ? (
        <Fragment>
            <Text style={DefaultStyle.title}>Opponent's Guess</Text>

            <View style={styles.controls}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" />
                </MainButton>

                <NumberContainer>{currentGuess}</NumberContainer>

                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" />
                </MainButton>
            </View>
        </Fragment>     
    ) : (
        <Fragment>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card style={{ ...styles.btnContainer, marginTop: availableHeight > 600 ? 20 : 5 }}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" />
                </MainButton>
            </Card>
        </Fragment>
    );

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyle.title}>Opponent's Guess</Text>
            {controls}
            <View style={{ ...styles.listContainer, width: Dimensions.get('window').width > 350 ? '80%' : '90%' }}>
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
        width: 400,
        maxWidth: '90%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    listContainer: {
        flex: 1
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