import React from 'react';
import { Text, View } from 'react-native';
import Home from '../screens/Home.js'
import Search from '../screens/Search.js'
import Activity from '../screens/Activity.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search,
  Activity: Activity
});

export default createAppContainer(TabNavigator);