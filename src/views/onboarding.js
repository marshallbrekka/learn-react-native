import React from "react";

import {
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

class ProfileBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', loading: false};
  }

  
  onPressSave() {
    this.setState({loading: true})
    setTimeout(()=> {
      this.props.navigation.navigate('ProfilePicture');
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
      <Text style={{
        color: 'white'
      }}>
      Let us know a little about you
      </Text>
      <View style={styles.inputsLine}>
        <TextInput placeholder="Your name"
                   keyboardType="default"
                   returnKeyType="next"
                   textContentType="name"
                   style={styles.name}
                   onChangeText={(text) => this.setState({name: text})}
                   onSubmitEditing={() => this.refs[AGE_REF].focus()}
        />
        <TextInput placeholder="Age"
                   ref={AGE_REF}
                   keyboardType="numeric"
                   blurOnSubmit={true}
                   returnKeyType="done"
                   style={styles.age}
                   onChangeText={(text) => this.setState({age: text})}
                   onSubmitEditing={() => this.onPressSave()}
      />
      </View>

      <TouchableHighlight
        style={styles.continueButton}
        underlayColor="#65CAED"
        onPress={() => this.onPressSave()}>
        <Text style={styles.continueButtonText}>Save</Text>
      </TouchableHighlight>
      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: '', loading: false};
  }

  
  onPressUpload() {
    this.setState({loading: true})
    setTimeout(()=> {
      this.props.navigation.navigate('App');
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
      <View style={styles.inputsWrapper}>
      <Text>Sorry, can\'t access camera right now</Text>

      <TouchableHighlight
        style={styles.continueButton}
        underlayColor="#65CAED"
        onPress={() => this.onPressUpload()}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableHighlight>
      </View>
      </View>
    );
  }
}


const OnboardingStack = createSwitchNavigator(
  {
    ProfileBasics: {
      screen: ProfileBasics,
      navigationOptions: {
        header: null
      }
    },
    ProfilePicture: {
      screen: ProfilePicture,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'ProfileBasics',
  }
)



export {OnboardingStack};
