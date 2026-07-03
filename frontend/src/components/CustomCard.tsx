import React from "react";

import {
TouchableOpacity,
Text,
StyleSheet,
View
} from "react-native";

import COLORS from "../styles/colors";

export default function CustomCard({

icon,

title,

subtitle,

selected,

onPress

}){

return(

<TouchableOpacity

style={[

styles.card,

selected && styles.selected

]}

onPress={onPress}

>

<Text style={styles.icon}>
{icon}
</Text>

<View style={{flex:1}}>

<Text style={styles.title}>
{title}
</Text>

<Text style={styles.subtitle}>
{subtitle}
</Text>

</View>

</TouchableOpacity>

)

}

const styles=StyleSheet.create({

card:{

flexDirection:"row",

padding:18,

borderRadius:18,

borderWidth:1,

borderColor:"#ddd",

marginBottom:18,

alignItems:"center",

backgroundColor:"#fff"

},

selected:{

borderColor:COLORS.primary,

backgroundColor:"#F5F2FF"

},

icon:{

fontSize:30,

marginRight:18

},

title:{

fontSize:18,

fontWeight:"700"

},

subtitle:{

color:"#777",

marginTop:5

}

})