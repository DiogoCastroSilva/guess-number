import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Card from '../../components/Card/Card';
import Colors from '../../shared/styles/colors';
import Input from '../../components/Input/Input';

const StartGame = () => {
    const [numberEntered, setNumberEntered] = useState('');

    const inputHandler = text => {
        // Remove any value that's not a number
        setNumberEntered(text.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        blurOnSubmit style={styles.input}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={inputHandler}
                        value={numberEntered}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <Button title="Reset" onPress={() => {}} color={Colors.danger} />
                        </View>
                        <View style={styles.btn}>
                            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    btn: {
        width: 120
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGame;