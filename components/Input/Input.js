import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({
    value,
    onChangeText,
    style,
    blurOnSubmit,
    autoCapitalize,
    autoCorrect,
    keyboardType,
    maxLength
}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            blurOnSubmit={blurOnSubmit}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            maxLength={maxLength}
            style={{ ...styles.input, ...style }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;