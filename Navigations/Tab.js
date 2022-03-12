import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
const tab = createBottomTabNavigator();
const Tab = () => {
  return (
  
  <tab.Navigator initialRouteName='Home'   screenOptions={{
    headerShown: false
  }}>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Contact" component={Contact} />
        <tab.Screen name="About" component={About} />
      </tab.Navigator>

  )
}

export default Tab