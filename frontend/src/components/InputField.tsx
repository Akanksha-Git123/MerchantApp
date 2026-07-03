import React from "react";
import {
  TextInput,
  StyleSheet,
} from "react-native";

export default function InputField(props){

return(

<TextInput

style={styles.input}

placeholderTextColor="#999"

{...props}

/>

)

}

const styles=StyleSheet.create({

input:{

borderWidth:1,

borderColor:"#ddd",

borderRadius:14,

padding:15,

fontSize:16,

marginBottom:18

}

})