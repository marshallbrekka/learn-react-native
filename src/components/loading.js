import React from "react";

import {
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

import {
  FLColors,
} from "../components/styles.js"

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: 10,
  }
});


class LoadingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: this.props.enabled};
  }

  render() {
    if (this.props.enabled) {
      return (
        <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={FLColors.green} />
        </View>
      )
    }
    return null
}
