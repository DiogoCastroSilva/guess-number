import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

// Shared
import Colors from '../../shared/styles/colors';
import DefaultStyle from '../../shared/styles/default';

// Components
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import TitleText from '../../components/TitleText/TitleText';
import MainButton from '../../components/MainButton/MainButton';

const StartGame = ({ onStartGame }) => {
    const [numberEntered, setNumberEntered] = useState('');
    const [comfirmState, setComfirmState] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 4);

    const updateLayout = () => {
        setBtnWidth(Dimensions.get('window').width / 4);
    };

    useEffect(() => {
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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
                <MainButton onPress={() => onStartGame(selectedNumber)}>
                    Start Game
                </MainButton>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a new Game</TitleText>
                        <Card style={styles.inputContainer}>
                            <Text style={DefaultStyle.bodyText}>Select a Number</Text>
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
                                <View style={{ width: btnWidth }}>
                                    <Button
                                        title="Reset"
                                        onPress={resetInputHandler}
                                        color={Colors.danger}
                                    />
                                </View>
                                <View style={{ width: btnWidth }}>
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
            </KeyboardAvoidingView>
        </ScrollView>
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
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    // btn: {
    //     // width: 100,
    //     width: Dimensions.get('window').width / 4
    // },
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