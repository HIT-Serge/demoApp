import React, { ReactNode } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type Props = {
    children: ReactNode,
    handler: () => void,
}

export default function PrimaryButton({children, handler}: Props) {
    return (
       
        <View style={styles.outerContainer}>
            {/* arrow necessary for ios because no andriod ripple */}
             <Pressable onPress={handler} style={(pressed) => pressed? [styles.innerContainer, styles.pressed]: styles.innerContainer} android_ripple={{color: Colors.primary600}} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 10,
        overflow: 'hidden',

    },
    innerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 6,     
        elevation: 12,
       
    },
    buttonText: {
        color: 'white',
        fontSize: Fonts.normalTextSize,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
})