import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import Colors from '../../shared/styles/colors';

const MainButton = ({ children, onPress }) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.btnContainer}>
            <ButtonComponent onPress={onPress} activeOpacity={0.6}>
                <View style={styles.btn}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
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