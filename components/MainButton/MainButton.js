import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    /**
     * Can also be used by creating diferent files for the specific platform like:
     * MainButton.android.js
     * MainButton.ios.js
     * 
     * The import would be the same
     * import MainButton from '../components/MainButton/MainButton';
     */
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