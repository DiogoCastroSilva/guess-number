import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// Shared
import Colors from '../../shared/styles/colors';
import DefaultStyle from '../../shared/styles/default';
import MainButton from '../../components/MainButton/MainButton';

const GameOver = ({
    numberOfRounds,
    userNumber,
    startNewGame
}) => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyle.title}>This is Game Over!</Text>
            <View style={styles.imageContainer}>
                {/* Local Image */}
                <Image
                    source={require('../../assets/images/success.png')}
                    style={styles.image}
                    resizeMode='cover'
                />
                {/* Image from the web */}
                {/* <Image
                    fadeDuration={1000}
                    source={{uri: 'https://www.clipartmax.com/png/middle/173-1730368_mountain-png-clipart-mountain-png-transparent-mountain-mountain-png.png'}}
                    style={styles.image}
                    resizeMode='cover'
                /> */}
            </View>
            <View style={styles.resultContainer}>
                <Text style={DefaultStyle.bodyText, styles.resultText}>
                    Your phone nedeed <Text style={styles.highlight}>{numberOfRounds} </Text>
                    to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
            </View>
            <MainButton onPress={startNewGame}>
                New Game
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    // Mandatory for Web images
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOver;