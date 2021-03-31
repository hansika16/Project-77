import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogInScreen from './screens/SignUpLogInScreen'

export default class App extends React.Component{
  render(){
    return(
      <View>
      <SignUpLogInScreen/>  
      </View>
    )
  }
} 

