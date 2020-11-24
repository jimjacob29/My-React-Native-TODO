import React from "react";
import {View,StyleSheet,Text,TouchableOpacity,Button} from "react-native";

export default function TodoItem(props){

        return(
            <View>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={()=>{props.handleComplete(props.item.id)}}
                >
                    <Text style={props.item.completed ? styles.completed : styles.unCompleted}> {props.item.label}</Text>
                    <Button
                        title="Delete"
                        color="red"
                        onPress={()=>{props.handledelete(props.item.id)}}
                    />   
                </TouchableOpacity>
            </View>
        );
}
const styles=StyleSheet.create({
    itemContainer:{
        width:"100%",
        height:80,
        borderBottomColor:"green",
        borderBottomWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:40,



    },
    completed:{
        color:"lightgrey"

    },
    unCompleted:{
        fontSize:30,
        fontWeight:"700"
    }
});