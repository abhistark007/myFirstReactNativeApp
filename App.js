/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const HomeScreen=()=>{
  return(
    <View style={styles.container}>
      <ImageBackground source={'./img/backgroundImage.jpg'} style={styles.image}>
      <Text style={styles.text}>R A Z E R</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000"
  }
});
const styles2 = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000"
  }
});

const App=()=>{
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImage.jpg')} style={styles.image}>
      <Text style={styles2.text}>R   A   Z   E   R</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>FOR THE</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>GAMERS</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>BY THE</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}>GAMERS</Text>
      <Text style={styles.text}></Text>
      </ImageBackground>
    </View>
  );
};



export default App;
