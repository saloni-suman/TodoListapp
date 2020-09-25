import React,{useState}from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';
import Header from './components/header';
import AddToDo from './components/addtodo'
import ToDoItem from './components/todoitem';


export default function App(){
const [todos,setTodos]=useState('');

const pressHandler=(key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo=>todo.key!=key);
  });
}

const submitHandler=(text)=>{
  setTodos((prevTodos)=>{
    return [
      {text:text,key:Math.random().toString()},
      ...prevTodos
    ];
  })
}
  return(
    <View style={Styles.container}>
      <Header/>
      <View>
        <FlatList data={todos}
        renderItem={({item})=>(
          <ToDoItem item={item} pressHandler={pressHandler}/>
        )}
        />
        <View>
          <AddToDo submitHandler ={submitHandler}/>
        </View>
      </View>
    </View>
  )
}

const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
})