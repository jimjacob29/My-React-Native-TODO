import React from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import {addTodo} from "../redux/actionCreator";

function Input (props){
    const[input ,setInput] = React.useState("");
    const handleChange=(value)=>{
        setInput(value);
    };
    const handlePress=()=>{
        props.addTodo(input);
        setInput("");
    };

    return(
        <View style ={styles.inputArea}>
            <TextInput
             style={styles.input}
             value={input}
             onChangeText={(value)=>{handleChange(value)}}
             >
            </TextInput>
            <TouchableOpacity
                style = {styles.button}
                onPress={handlePress}
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

export default connect(null,{addTodo})(Input)