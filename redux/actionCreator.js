import React from "react";
import {ADD,DELETE,COMPLETE} from "./action.js";

export function addTodo(data){
    return({
        type : ADD,
        payload: {label : data}

    });
}
export function deleteTodo(id){
    return({
        type :DELETE,
        payload:{id}
    });
}

export function completeTodo(id){
    return({
        type : COMPLETE,
        payload:{id}
    });
}