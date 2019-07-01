import React from "react";

import {
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";


const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 24,
    backgroundColor: "#5BC7AE",
    height: 46,
    borderRadius: 23,
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    color: 'white',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
  },
});

class FLButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <TouchableHighlight
        {...this.props}
        style={styles.buttonContainer}
        underlayColor="#65CAED">
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

export {FLButton};
