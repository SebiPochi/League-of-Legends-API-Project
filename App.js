import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useMemo } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PruebasView from './Views/PruebasView';
import HomeView from './Views/HomeView';
import SearchAccountView from './Views/SearchAccountView';
import { AccountProvider } from './Context/FavAccountContext';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <AccountProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="SearchAccount" component={SearchAccountView} />
          <Stack.Screen name="Pruebas" component={PruebasView} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccountProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
