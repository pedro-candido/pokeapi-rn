import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home'
import Pokemons from './src/pages/Pokemons';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home' 
          component={Home}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name={'Options'} component={<Text></Text>}/> */}
        <Stack.Screen
          name={'Pokemons'}
          component={Pokemons}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
});
