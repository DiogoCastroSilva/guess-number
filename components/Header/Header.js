import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;