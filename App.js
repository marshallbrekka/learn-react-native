/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// In App.js in a new project

import React from "react";
import { Platform, FlatList, ScrollView, Image, TouchableWithoutFeedback, View, Text, Button, KeyboardAvoidingView, TextInput, Alert, Keyboard, Animated, Dimensions, Easing } from "react-native";
// import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';


import {AuthStack} from "./src/views/authentication.js";
import {OnboardingStack} from "./src/views/onboarding.js";
import {AppDrawer} from "./src/views/explore.js";

const switchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Onboarding: OnboardingStack,
    App: AppDrawer,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(switchNavigator);
// export default HomeScreen;
