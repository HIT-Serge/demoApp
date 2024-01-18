import React from 'react';
import { View, Text , Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';


export default function GameOver({handler, userNumber, guessRounds}: {handler: ()=>void, userNumber: number, guessRounds: number}) {
    const {width, height} = useWindowDimensions();
    let imageSize =300;
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle ={
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        borderWidth: 3,
    }
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
        <Title >Game Over</Title>
        </View>
        <View style={[styles.imageContainer, imageStyle]}>
         
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText} >Your phone needed <Text style={styles.highlightText}>{guessRounds} </Text>rounds to guess number <Text style={styles.highlightText}>{userNumber}</Text></Text>
        <PrimaryButton handler={handler}>New Game</PrimaryButton>
        </View>
        </ScrollView>
    )
}

// const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    titleContainer: {
        // flex: 1,
        alignItems: 'center',
        
    },
    summaryText: {
        fontFamily: 'OpenSans',
        fontSize: 24,
        textAlign: 'center',
        // margin: deviceWidth < 380 ? 12 : 24,
        
    },
    highlightText: {
        fontFamily: 'OpenSansBold',
        color: Colors.primary700,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,

    },
    image: {
        width: '100%',
        height: '100%',
    }
})