import React from "react";

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import { FLButton } from "../components/button.js"

import {
  FLColors,
  FLStyles
} from "../components/styles.js"

const styles = StyleSheet.create({
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
  email: {
    height: 46,
    width: '100%',
    borderColor: 'gray',
    borderRadius: 7,
    paddingLeft: 20,
    backgroundColor: "white",
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

class EmailCapture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', loading: false};
  }

  
  onPressAuthenticate() {
    this.setState({loading: true})
    setTimeout(()=> {
      this.props.navigation.navigate('ConfirmCode');
      this.setState({loading: false})
    }, 1000)
  }

  
  render() {
    loadingView = null
    if (this.state.loading) {
      loadingView = (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5BC7AE" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {loadingView}
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.inputsWrapper}>
        <TextInput placeholder="Email address"
                   keyboardType="email-address"
                   autoCapitalize="none"
                   blurOnSubmit={true}
                   returnKeyType="done"
                   textContentType="username"
                   style={styles.email, FLStyles.fontWeightLite, FLStyles.fontSizeMedium}
                   onChangeText={(text) => this.setState({email: text})}
                   onSubmitEditing={() => this.onPressAuthenticate()}
      />

      <FLButton onPress={() => this.onPressAuthenticate()}>
      Sign In
      </FLButton>

      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

class ConfirmCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: '', loading: false};
  }

  
  onPressAuthenticate() {
    this.setState({loading: true})
    setTimeout(()=> {
      this.props.navigation.navigate('Onboarding');
    }, 1000)
  }

  
  render() {
    loadingView = null
    if (this.state.loading) {
      loadingView = (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5BC7AE" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {loadingView}
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.inputsWrapper}>
        <TextInput placeholder="Enter Code"
                   keyboardType="number-pad"
                   blurOnSubmit={true}
                   returnKeyType="done"
                   style={styles.email}
                   autoFocus={true}
                   textContentType="oneTimeCode"
                   onChangeText={(text) => this.setState({code: text})}
                   onSubmitEditing={() => this.onPressAuthenticate()}
      />

      <FLButton onPress={() => this.onPressAuthenticate()}>
      Submit Code
      </FLButton>
      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}


const AuthStack = createStackNavigator(
  {
    EmailCapture: {
      screen: EmailCapture,
      navigationOptions: {
        header: null
      }
    },
    ConfirmCode: {
      screen: ConfirmCode,
      // navigationOptions: {
      //   header: null
      // }
    },
  },
  {
    initialRouteName: 'EmailCapture',
  }
)



export {AuthStack};
