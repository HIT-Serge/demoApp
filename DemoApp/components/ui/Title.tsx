import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';
import { Dimensions } from 'react-native';
import Fonts from '../../constants/fonts';

export default function Title({children}: {children: string}) {

    return (
        <Text style={styles.title}>{children}</Text>
    )
}
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
 
    title: {
       
        fontSize: Fonts.normalTextSize,
        fontWeight: 'bold',
        color: 'white',
        // 3 methods possible to conditionally render styles platform specific: 1. Platform.OS 2. Platform.select 3. Copy the file and name it with .ios and the other .android like Title.ios.tsx. Important is that the imports remain on Title. However this last thrid option did not work for me.
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({android: 2, ios: 0}),
        borderColor: 'white',
        padding: 12,
        marginVertical: 10,
        textAlign: 'center',
        maxWidth: '80%',
        width: 300,
    }
})