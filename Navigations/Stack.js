import { View, Text } from 'react-native'
import React from 'react'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Tab from './Tab'

import { createStackNavigator } from '@react-navigation/stack';
const stack = createStackNavigator();

const Stack = () => {
  return (
    <stack.Navigator initialRouteName='Login'   screenOptions={{
      headerShown: false
    }}>
    <stack.Screen name="Login" component={Login} Options={{headerShown:false}}/>
    <stack.Screen name="SignUp" component={SignUp} />
    <stack.Screen name="Tab" component={Tab} />
  </stack.Navigator>
  )
}

export default Stack