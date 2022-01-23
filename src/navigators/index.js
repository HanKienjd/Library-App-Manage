import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_SCREEN, SIGN_UP_SCREEN} from 'src/constants/screens';
import LoginScreen from 'src/screens/AccountScreens/LoginScreen';
import RegisterScreen from 'src/screens/AccountScreens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppStackScreen from './AppStackScreen';
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

function RootStackNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
        <RootStack.Screen name="App" component={AppStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigation;
