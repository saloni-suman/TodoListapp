import React,{useState} from 'react';
import {StyleSheet, Text,View,TextInput,Button} from 'react-native';

export default function AddTodo ({submitHandler}){
    const[text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput style={styles.input}
             placeholder="Add Todo"
             onChangeText={changeHandler}
            />
            <Button  onPress={()=>submitHandler(text)} style={styles.button} title='add todo' color='#900C3F'/>

        </View>
       
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
    },
    button:{
        color:'#900C3F',
        padding: 20,
        fontSize: 30,
        fontFamily: "Courier New",
        width: 400,
        height: 40,
        textAlign: "center"
    }
})