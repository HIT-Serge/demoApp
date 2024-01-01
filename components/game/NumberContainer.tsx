import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

export default function NumberContainer ({children}: {children:number}) {
    return (
        <View style={styles.container}>
           <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: Fonts.normalTextSize,
        fontWeight: 'bold',
    }
    })
