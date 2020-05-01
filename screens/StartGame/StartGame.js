import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Text
} from 'react-native';

import Card from '../../components/Card/Card';
import Colors from '../../shared/styles/colors';

const StartGame = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title="Reset" onPress={() => {}} color={Colors.danger} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Confirm" onPress={() => {}} colort={Colors.primary} />
                    </View>
                </View>
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
    }
});

export default StartGame;