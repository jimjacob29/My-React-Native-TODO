import React from "react";
import {View,StyleSheet,Text} from "react-native";

export default function Header(props){
    return(
        <View style={styles.header}>
            <Text style={styles.desc}>To-Do APP</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: "black",
        height:60,
        alignItems:"center",
        justifyContent:"center"
    },
    desc:{
        color: "khaki",
        fontSize:25,
        fontWeight:"900"
    }
});