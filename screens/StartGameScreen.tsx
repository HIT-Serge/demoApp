import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Alert,Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';

type Props = {
    pickedNumber: (number: number) => void,
}
export default function StartGameScreen({pickedNumber}: Props) {

    const [enteredValue, setEnteredValue] = useState<string>('');
    const {width, height} = useWindowDimensions();
    const confirmHandler = () => {
        const chosenNumber: number = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number must be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: ()=>setEnteredValue('')}]); 
            return;
        }
        // console.log('valid number');
        pickedNumber(chosenNumber);

       
    };
    const marginTopDistance: number= deviceHeight < 420 ? 12 : 36;
return (
    <ScrollView style={styles.keyboardAvoiding} >
    <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior='position'>
       
    <View style={[styles.gameScreenConainer,{marginTop: marginTopDistance}]}>
        <Title>Start a new game!</Title>
<Card>
    <InstructionText>Select a number...</InstructionText>
    <TextInput style={styles.numberInput} keyboardType='number-pad' autoCapitalize='none'maxLength={2} onChangeText={setEnteredValue} value={enteredValue}/>
    <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
    <PrimaryButton handler={confirmHandler}>Confirm</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton handler={()=>setEnteredValue('')}>Reset</PrimaryButton>
    </View>
    </View>


</Card>
</View>
</KeyboardAvoidingView>
</ScrollView>
)

}
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
        // inputContainer: {
        //     padding: 16,
        //     marginTop: 100,
        //     marginHorizontal: 20,
        //     borderRadius: 8,
        //     // androidspecific
        //     elevation: 12,
        //     // ios specific
        //     shadowColor: 'black',
        //     shadowOffset: { width: 0, height: 2 },
        //     shadowRadius: 6,

        //     backgroundColor: '#4e0329',
        //     alignItems: 'center',
        // },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',

        paddingHorizontal: 4,

    },
    buttonContainer: {
        flex: 1,    

    },
    gameScreenConainer: {
        flex: 1,
        alignItems: 'center',
    

    },
    keyboardAvoiding: {
        flex: 1,
    }

});