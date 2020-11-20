import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'

const Tabs = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {

  return (
    <Tabs.Navigator 
     initialRouteName="Home"
     screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'coral',
      inactiveTintColor: 'gray',
      showLabel: false
    }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Settings" component={SettingsScreen}  />
    </Tabs.Navigator> )}

export default TabNavigation;