import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import COLORS from "../styles/colors";

export default function CustomButton({
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button:{

    backgroundColor:COLORS.primary,

    padding:18,

    borderRadius:16,

    alignItems:"center",

    marginTop:20

  },

  text:{

    color:"#fff",

    fontSize:18,

    fontWeight:"700"

  }

});