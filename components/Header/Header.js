import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform
} from 'react-native';
import Colors from '../../shared/styles/colors';
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
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.danger : 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;