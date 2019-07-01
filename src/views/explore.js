import React from "react";

import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
  Picker,
} from "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

const AGE_REF = 'ageInput';


const styles = StyleSheet.create({
  scroll: {
  },
  container: {
    resizeMode: "contain",
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  inputsWrapper: {
    alignSelf: "center",
    // backgroundColor: 'red',
    maxWidth: 289,
    width: "80%",
  },
  
  inputsLine: {
    flexDirection: "row",
    alignSelf: "center",
  },
  
  continueButton: {
    justifyContent: 'center',
    marginTop: 24,
    backgroundColor: "#5BC7AE",
    height: 46,
    borderRadius: 23,
  },
  continueButtonText: {
    textAlign: "center",
    // alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 20,
    color: 'white',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
  },
  name: {
    fontSize: 20,
    height: 46,
    borderColor: 'gray',
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    borderRadius: 7,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: "white",
    flexGrow: 1,
    marginRight: 10,
  },
  age: {
    fontSize: 20,
    height: 46,
    borderColor: 'gray',
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    borderRadius: 7,
    paddingLeft: 20,
    paddingRight: 10,
    width: 80,
    backgroundColor: "white",
  },
  blue: {
    backgroundColor: 'blue'
  },
  red: {
    backgroundColor: 'red'
  },
  loadingContainer: {
    justifyContent: 'center',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: 10,
  }
});

class Explore extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Explore',
  };

  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={() => this.props.navigation.navigate('Settings')}
        title="Go to settings"
      />
      </View>
    );
  }
}

class Chat extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Chat',
    
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Button
          title="Explore"
          onPress={() => this.props.navigation.navigate('Explore')}
        />
      </View>
    );
  }
}

class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text style={[styles.paragraph, { color: '#fff' }]}>
          Light Screen
        </Text>
        <Button
          title="Go to chat?"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    );
  }
}

const AppDrawer = createDrawerNavigator({
  Explore: {
    screen: Explore,
  },
  Chat: {
    screen: Chat,
  },
  Settings: {
    screen: Settings,
  },
}, {
  initialRouteName: 'Explore',
});


export {AppDrawer};
