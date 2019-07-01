import {
  StyleSheet,
} from "react-native";

const FLColors = {
  green: "#5BC7AE",
  white: 'white'
}

const FontFamily = "Helvetica Neue"

const FLStyles = StyleSheet.create({
  fontWeightMedium: {
    fontFamily: FontFamily,
    fontWeight: "500",
  },
  fontWeightLite: {
    fontFamily: FontFamily,
    fontWeight: "400",
  },
  fontSizeMedium: {
    fontSize: 20,
  },
});




export {
  FLColors,
  FLStyles
}
