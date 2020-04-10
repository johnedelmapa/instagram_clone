import React from 'react';
import Login from '../screens/Login.js'
import SignupScreen from '../screens/Signup.js'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator(
  {
    Login: { 
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Signup: { 
      screen: SignupScreen
    }
  }
);

export default createAppContainer(StackNavigator);