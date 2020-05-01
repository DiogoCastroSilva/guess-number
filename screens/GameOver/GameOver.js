import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

// Shared
import Colors from '../../shared/styles/colors';
import DefaultStyle from '../../shared/styles/default';
import MainButton from '../../components/MainButton/MainButton';

const GameOver = ({
    numberOfRounds,
    userNumber,
    startNewGame
}) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    const updateLayout = () => {
        setAvailableDeviceWidth(Dimensions.get('window').width);
        setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    useEffect(() => {
        Dimensions.addEventListener('change', updateLayout);
 
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyle.title}>This is Game Over!</Text>
                <View style={{ ...styles.imageContainer,
                    width: availableDeviceWidth * 0.7,
                    height: availableDeviceWidth * 0.7,
                    borderRadius: availableDeviceWidth * 0.7 / 2,
                    marginVertical: Dimensions.get('window').height / 30}}>
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
                <View style={{...styles.resultContainer,
                    marginVertical: availableDeviceHeight / 60,
                    marginBottom: availableDeviceHeight < 400 ? 10 : 30}}>
                    <Text style={{
                        ...DefaultStyle.bodyText,
                        ...styles.resultText,
                        fontSize: availableDeviceHeight < 400 ? 60 : 20
                    }}>
                        Your phone nedeed <Text style={styles.highlight}>{numberOfRounds} </Text>
                        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                    </Text>
                </View>
                <MainButton onPress={startNewGame}>
                    New Game
                </MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },
    // Mandatory for Web images
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30
    },
    resultText: {
        textAlign: 'center'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOver;