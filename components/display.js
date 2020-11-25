import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from './todoItem';
import { connect} from 'react-redux';
import {completeTodo,deleteTodo} from '../redux/actionCreator';

function Display(props){

    const handleComplete=(id)=>{
        props.completeTodo(id);
    };
    const handleDelete=(id)=>{
        props.deleteTodo(id);
    }
    const renderItem=({item})=>{
        return(
          <TodoItem item={item} handleComplete={handleComplete} handledelete={handleDelete}/>
        );
    }
    return(
        <FlatList
          data={props.lists}
          keyExtractor={item=>item.id.toString()}
          renderItem={renderItem}
        >

        </FlatList>
    );
}
const mapStateToProps = (state)=>{
    const lists = state.lists;
    return {lists};
}
export default connect(mapStateToProps,{completeTodo,deleteTodo})(Display)