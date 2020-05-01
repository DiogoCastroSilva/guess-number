import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../../shared/styles/colors';

const MainButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6}>
            <View style={styles.btn}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    text: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;