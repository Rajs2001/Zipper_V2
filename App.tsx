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
      <stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      <stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen}/>

      </stack.Navigator>
    </NavigationContainer>
  )
}