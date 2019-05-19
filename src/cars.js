import React from "react";
import { Text, ScrollView, Image, StyleSheet, View, Animated, Dimensions, TouchableWithoutFeedback } from "react-native";

const screen = Dimensions.get('window');


const styles = StyleSheet.create({
  scroll: {
  },
  container: {
    resizeMode: "contain"
  },
  blue: {
    backgroundColor: 'blue'
  },
  red: {
    backgroundColor: 'red'
  }
});

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }
  onLayout = (event) => {
    this.setState({width: event.nativeEvent.layout.width});
  }
  
  render() {
    var pic1 = {
      uri:"https://cdn-web.prod.fair.engineering/static/index/onboarding/bmw-base.png"
    };
    var pic2 = {
      uri:"https://cdn-web.prod.fair.engineering/static/index/onboarding/kia-base.png"
    };
    return (
      <ScrollView
        onLayout={this.onLayout}
        style={styles.scroll}
        pagingEnabled={true}
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}

      >
          <Image
            style={[styles.container, {width: this.state.width}]}
            source={pic1} />
          <Image
            style={[styles.container, {width: this.state.width}]}
            source={pic2} />
      </ScrollView>
    );
  }
}


class Thing extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {alert("foo");}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}} onStartShouldSetResponder={() => {alert("inner2"); return true;}}>
            <Text>Hello</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export {Cars, Thing};
