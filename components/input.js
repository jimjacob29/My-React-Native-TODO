import React from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from "react-native";

export default function Input (props){

    return(
        <View style ={styles.inputArea}>
            <TextInput
             style={styles.input}
             value={props.input}
             onChangeText={(value)=>{props.handleChange(value)}}
             >
            </TextInput>
            <TouchableOpacity
                style = {styles.button}
                onPress={props.handlePress}
            >
                <Text style ={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    inputArea:{
        flexDirection:'row',
        justifyContent:"space-between" ,
        shadowOffset : {width:0,height:3},
        shadowColor:"#171717",
        shadowOpacity:0.1
   },
    input:{
        backgroundColor:"#F3F3F3",
        flex:1,
        height:35,
        fontSize:18

    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow",
        height:35,
        width:100,
        

    },
    buttonText:{
        fontWeight:"600",
        fontSize:18

    }
})