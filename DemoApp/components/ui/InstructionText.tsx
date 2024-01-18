import React, { PropsWithChildren, ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


export default function InstructionText({ children, style }: {children: ReactNode, style?: object }) {
    return (
        <Text style={[styles.instructionText,style]}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    instructionText: {
        // fontFamily: 'OpenSans',
        color: Colors.secondary500,
        fontSize: 24,

    }

})