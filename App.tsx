import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

// import AppLoading from 'expo-app-loading';
// import SplashScreen from 'expo-splash-screen';

export default function App() {


  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);
  console.log(guessRounds);
  
  const [fontsLoaded] =useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  // depecrated
  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  const numberMatched = (rounds: number) => {
    setGuessRounds(rounds);
    setGameOver(true);
  }
  const resetGame = () => {
    setUserNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }
  let screen = userNumber ? 
  (gameOver? <GameOver handler={resetGame} userNumber={userNumber} guessRounds={guessRounds} />:<GameScreen pickedNumber={userNumber} numberMatched={(rounds)=>{numberMatched(rounds)}} /> ): <StartGameScreen pickedNumber={setUserNumber}/>;
 
  return (
    <>
    <StatusBar style='light' backgroundColor='blue'/>
    <LinearGradient colors={[Colors.primary700,Colors.secondary500 ]} style={styles.screen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen}imageStyle={styles.backgroundImage} >
        
        <SafeAreaView style={styles.rootScreen}>
       {screen}
       </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  screen: {
    flex: 1,
    backgroundColor: '#ddb52f',
    // marginTop: 24,
  },
  backgroundImage: {
    opacity: 0.2,
  }

});
