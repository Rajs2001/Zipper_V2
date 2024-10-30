import React, { useEffect, useState} from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import  LoginScreen  from "./src/screens/LoginScreen";
import  OTPVerificationScreen  from "./src/screens/OTPVerificationScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { enableScreens } from 'react-native-screens';

enableScreens();


const stack = createStackNavigator();

export default function App(){

  
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="LoginScreen">
      <stack.Screen name="LoginScreen" component={LoginScreen}/>
      <stack.Screen name="SignUp" component={SignUpScreen}/>
      <stack.Screen name="OTPVerification" component={OTPVerificationScreen}/>

      </stack.Navigator>
    </NavigationContainer>
  )
}