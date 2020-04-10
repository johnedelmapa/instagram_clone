import React from 'react';
import Login from '../screens/Login.js'
import Signup from '../screens/Signup.js'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator(
  {
    Login: { 
      screen: Login
    },
    Signup: { 
      screen: Signup
    }
  }
);

export default createAppContainer(StackNavigator);