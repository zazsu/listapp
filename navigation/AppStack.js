import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import TabNavigation from '../navigation/TabNavigation'

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Shopping List App">  
    <Stack.Screen name="Shopping List App" component={TabNavigation}></Stack.Screen>
    <Stack.Screen name="Back to Lists" component={ListScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppStack;