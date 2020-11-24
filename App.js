import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Input from './components/input';
import Header from './components/Header';
import TodoItem from './components/todoItem';

export default function App() {
  const [lists,setLists] =React.useState([{
    id:2,
    label:"Buy Milk",
    completed:false
  },{
    id:1,
    label:"Buy Meat",
    completed:true
  }]);
  const[input,setInput]= React.useState("");

  const handleChange=(value)=>{
    setInput(value);
  }

  const handlePress=()=>{
    if(input==="" || input.trim(" ")===""){
      setInput("");
      return;
    }
    const obj={};
    const length = lists.length;
    if(length===0){
      obj["id"] = 1;
    }
    else{
      obj["id"] = lists[0].id+1;
    }
    obj["label"]=input;
    obj["completed"]=false;
    const tempList = [...lists];
    tempList.unshift(obj);
    setLists(tempList);
    setInput("");
    console.log(tempList);
    
  }

  const handleComplete=(id)=>{
    const indexValue = lists.findIndex((item)=>item.id===id);
    const tempList=[...lists];
    tempList[indexValue].completed=!tempList[indexValue].completed;
    setLists(tempList);
  }

  const handleDelete=(id)=>{
    const indexValue = lists.findIndex((item)=>item.id===id);
    const tempList=[...lists];
    tempList.splice(indexValue,1);
    setLists(tempList);
  }

  const renderItem=({item})=>{
    return(
      <TodoItem item={item} handleComplete={handleComplete} handledelete={handleDelete}/>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.statusBar} ></View>
      <Header/>
      <Input input={input} handlePress={handlePress} handleChange={handleChange} />
      <FlatList
        data={lists}
        keyExtractor={item=>item.id}
        renderItem={renderItem}
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar:{
    backgroundColor:"yellow",
    height:35
  }
});
