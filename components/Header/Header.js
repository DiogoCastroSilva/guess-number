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
        <View style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid}) }}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center'
    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth:1,
        backgroundColor: 'white'
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.danger : 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;