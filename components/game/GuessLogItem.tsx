import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem= ({item, roundNumber, screenWidth}: {item: number, roundNumber: number, screenWidth: number}) => {
    let verticalMarginDistance: number = screenWidth > 500? 2: 8;

    return (
        <View style={[styles.container, {marginVertical: verticalMarginDistance}]}>
            <Text style={styles.text}>Round {roundNumber}: </Text>
            <Text style={styles.text}>Opponent's Guess: {item}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.primary700,
        backgroundColor: Colors.secondary500,
        borderRadius: 40,
        paddingHorizontal: 12,
     

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'OpenSans',
    },
});

export default GuessLogItem;
