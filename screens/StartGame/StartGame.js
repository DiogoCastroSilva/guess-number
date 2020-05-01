import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../../components/Card/Card';
import Colors from '../../shared/styles/colors';
import Input from '../../components/Input/Input';
import NumberContainer from '../../components/NumberContainer/NumberContainer';

const StartGame = ({ onStartGame }) => {
    const [numberEntered, setNumberEntered] = useState('');
    const [comfirmState, setComfirmState] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputHandler = text => {
        // Remove any value that's not a number
        setNumberEntered(text.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setNumberEntered('');
        setComfirmState(false);
    };

    const comfirmInputHandler = () => {
        const choosenNumber = parseInt(numberEntered);
        if (isNaN(choosenNumber) ||
            choosenNumber <= 0 ||
            choosenNumber > 99) {
            
            Alert.alert(
                'Invalid number!',
                'Number has to be a number from 0 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        setComfirmState(true);
        setSelectedNumber(choosenNumber);
        setNumberEntered('');
        Keyboard.dismiss();
    };

    let comfirmedOutput;
    if (comfirmState) {
        comfirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button
                    title="Start Game"
                    color={Colors.primary}
                    onPress={() => onStartGame(selectedNumber)}
                />
            </Card>
        );
    }

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
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.danger}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                title="Confirm"
                                onPress={comfirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {comfirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGame;