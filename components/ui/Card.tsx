import React, {PropsWithChildren} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Card = ({children}: PropsWithChildren) => {

        return (
        <View style={styles.card}>
            {children}
        </View>
        // Card component JSX goes here
    );
};

export default Card;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 20,
        borderRadius: 8,
        // androidspecific
        elevation: 12,
        // ios specific
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,

        backgroundColor: '#4e0329',
        alignItems: 'center',
        },}
)
