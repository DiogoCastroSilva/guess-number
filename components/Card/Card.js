import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const Card = ({ children, style }) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // ios
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // android
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;