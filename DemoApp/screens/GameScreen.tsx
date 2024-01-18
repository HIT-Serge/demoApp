import React,  {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';   
import InstructionText from '../components/ui/InstructionText';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

// type Props = {
//     pickedNumber: number,
// }

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum: number = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

let minBoundary: number = 1;
let maxBoundary: number = 100;

export default function GameScreen ({pickedNumber, numberMatched} : {pickedNumber: number, numberMatched: (rounds: number)=>void}) {
    // je kunt initialGuess niet dynamisch maken omdat useEffect pas als laatste wordt uitgevoerd en daarvoor wordt initialGuess nog een keer uitgevoerd
    const {width, height} = useWindowDimensions();
   const initialGuess = generateRandomBetween(1, 100, pickedNumber);
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [rounds, setRounds] = useState<number[]>([initialGuess]);
    const guessRoundsListLength: number = rounds.length;
// useEffect is nodig omdat dit component nog aan het renderen bent met een currentGuess en de numberMatched al app wil rerenderen een niveau hoger
    useEffect(() => {
        if (currentGuess === pickedNumber) {
            numberMatched(guessRoundsListLength);
        }
    }, [currentGuess, pickedNumber, numberMatched])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    function nextGuessHandler(direction: string) {
        if ((direction === 'lower' && currentGuess < pickedNumber) || 
            (direction === 'higher' && currentGuess > pickedNumber)) {
                 Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if (direction === 'lower' ){
            maxBoundary = currentGuess;
        }
        else  {
            minBoundary = currentGuess +1;
        }
            
            const newRndNumber: number = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
            setCurrentGuess(newRndNumber);
            setRounds((previousState) => [ newRndNumber, ...previousState]);
        
        }
    let content = width > 500? 
        <>  
             <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
             <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                <PrimaryButton handler={()=>{nextGuessHandler('lower')}}>
                <Ionicons name="md-remove" size={24} color="white" />
                </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                <PrimaryButton handler={()=>{nextGuessHandler('higher')}}>
                <Ionicons name="md-add" size={24} color="white" />
                </PrimaryButton>
                </View>
            
            </View>
         
          
        </>
    :
      <>
         <NumberContainer>{currentGuess}</NumberContainer>
   
        <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton handler={()=>{nextGuessHandler('lower')}}>
            <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton handler={()=>{nextGuessHandler('higher')}}>
            <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
            </View>
        
        </View>
        </Card>
        </>
    ;

        
    
    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
            <Title >Opponent's Guess</Title>
            </View>
        
            {content}
            <View style={styles.titleContainer}>
            {/* <Title>Number of Rounds</Title> */}
            </View>
            <View style={styles.listContainer}>
            <FlatList data={rounds} keyExtractor={(item)=> item.toString()} renderItem={(itemData) => 
            <GuessLogItem item={itemData.item} roundNumber={guessRoundsListLength -itemData.index} screenWidth={width}/>}/>
       
            </View>
           
        </View>
    )

   
}
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    titleContainer: {
        // flex: 1,
        alignItems: 'center',
        
    },

    listContainer: {
        flex: 1,
    },
    
    screen: {
        flex: 1,
        padding: deviceWidth < 380 ? 12 : 24,
        


    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ddb52f',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
        textAlign: 'center',

    },
    buttonsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 4,

    },
    buttonContainer: {
        flex: 1,    
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    instructionText: {
      marginBottom: 12,

    }
})