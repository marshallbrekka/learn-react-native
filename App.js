/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// In App.js in a new project

import React from "react";
import { FlatList, ScrollView, Image, TouchableWithoutFeedback, View, Text, Button, KeyboardAvoidingView, TextInput, Alert, Keyboard, Animated, Dimensions, Easing } from "react-native";
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";

import {Cars, Thing} from "./src/cars.js";
import {VehicleTile, sampleVehicle} from "./src/vehicle_tile.js";
import {searchResult} from "./src/search_result.js";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phoneNumber: ""};
  }

  inputToValue(inputText){
    if (inputText.length == 9) {
      this.navigateToDetails();
    }
  }

  componentWillMount() {
    this.keyboardHeight = new Animated.Value(0);
    this.height = new Animated.Value(0);
    this.getHeight = new Animated.Value(0);
    this.mobileHeight = new Animated.Value(0);
    this.opacity = new Animated.Value(1);
  }
    
  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      (event) => (
        this._keyboardWillShow(event)
      ));
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      (event) => (
      this._keyboardWillHide(event)
      ));
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _keyboardWillShow(event) {
    Animated.parallel([
      Animated.timing(this.opacity, {
        duration: 250,
        useNativeDriver: true,
        toValue: 0,
      }),
      Animated.timing(this.height, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: -1 * (event.endCoordinates.height - 70)
      }),
      Animated.timing(this.getHeight, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: -1 * (event.endCoordinates.height)
      }),
      Animated.timing(this.mobileHeight, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: -1 * (event.endCoordinates.height - 35)
      }),
    ]).start();
  }

  _keyboardWillHide(event) {
    var {height, width} = Dimensions.get('window');

    Animated.parallel([
      Animated.timing(this.opacity, {
        duration: 250,
        useNativeDriver: true,
        toValue: 1,
        delay: 500
      }),
      Animated.timing(this.height, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: 0
      }),
      Animated.timing(this.getHeight, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: 0
      }),
      Animated.timing(this.mobileHeight, {
        useNativeDriver: true,
        duration: 840,
        easing: Easing.bezier(0.58, 0.0, 0.31, 1.0),
        toValue: 0
      }),
    ]).start();
  }

  navigateToDetails() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Details' })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    let {phoneNumber} = this.state;

    return (
      <ScrollView style={{width: "100%", height: "100%"}}
                  keyboardShouldPersistTaps="never"
                  bounces={false}
      >
        <View style={{flex: 1, height: SCREEN_HEIGHT}}>
          <Animated.View style={{
            flex: 1,
            opacity: this.opacity,
            backgroundColor: "rgb(245, 245, 245)"
          }}
          >
            <Cars/>
          </Animated.View>

          <Animated.View style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
          }}>
            <View style={{flex: 1}}>
              <Animated.Text style={{
                transform: [{
                  translateY: this.getHeight
                }],
                textAlign: "center",
                paddingTop: 10,
                fontSize: 34
              }}>
                Get Started
              </Animated.Text>
              <Animated.Text style={{
                transform: [{
                  translateY: this.mobileHeight
                }],
                paddingTop: 20,
                textAlign: "center",
                fontSize: 20,
                color: "grey"
              }}>
                Enter Your Mobile Number
              </Animated.Text>
            </View>
            <Animated.View style={{
              transform: [{
                translateY: this.height
              }],
              flex: 2,
              flexDirection: "row",
              justifyContent: "center"
            }}>
              <TextInput
                style={{
                  textAlign: "center",
                  fontSize: 34,
                  height: 64,
                  width: 264,
                  borderColor: 'gray',
                  fontFamily: "Helvetica Neue",
                  fontWeight: "500",
                  color: 'rgb(255, 90, 0)',
                  backgroundColor: "white",
                  borderRadius: 7,
                  shadowRadius: 20,
                  shadowOffset: {height: 15},
                  shadowOpacity: 0.15
                }}
                keyboardType="phone-pad"
                placeholder="(000) 000-0000"
                placeholderTextColor="rgb(200, 200, 200)"
                textContentType="telephoneNumber"
                selectionColor="rgb(255, 90, 0)"
                onChangeText={this.inputToValue.bind(this)}
              />
            </Animated.View>
          </Animated.View>
        </View>
          </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <FlatList
        data={searchResult.data.vehicles}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <VehicleTile vehicle={item} />}
      />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
// export default HomeScreen;
