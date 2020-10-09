import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config';
import * as firebase from 'firebase';
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    submitStory=()=>{
        console.log("hi")
        db.collection('stories').add({
            title:this.state.title,
            author:this.state.author,
            story:this.state.story
        })
        this.setState({
          
            author:'',
            story:'',
            title:'',
        })
        alert("Your story is submitted")
    }
render(){
    return(
        <KeyboardAvoidingView>
            <TextInput onChangeText={(text)=>{this.setState({
                title:text,
            })}} value={this.state.title} placeholder='title'>
        

            </TextInput>
            <TextInput onChangeText={(text)=>{this.setState({
                author:text,
            })}} value={this.state.author} placeholder='author'>
         

            </TextInput>
            <TextInput onChangeText={(text)=>{this.setState({
                story:text,
            })}} value={this.state.story} placeholder='story' multiline={true}>

            </TextInput>
            <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
                <text>submit</text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}


}


const styles=StyleSheet.create({
    submitButton:{
        width:100,
        height:50
    }
})




               
                  
                  