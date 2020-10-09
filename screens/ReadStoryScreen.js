import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config.js';
import * as firebase from 'firebase';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super()
      this.state={
        allStories:[],
        search:''
      }
    
  } 
  
  componentDidMount(){
    this.retriveStories();
  }

  retriveStories=()=>{
    db.collection('stories').get().then((response)=>response.docs.map((doc)=>{var x=doc.data();
    this.setState({
      allStories:[...this.state.allStories,doc.data()]
    })}))
  }
 /*
  fetchdata=async(text)=>{
    this.setState({
      search:text,
    })
   
   var search = this.state.search;
   console.log(search)
   var result = await db.collection('allStories').where("search","==",search).get()
   console.log(result)
   result.docs.map((doc)=>{
    this.setState({allStories:[...this.state.allStories,doc.data()]})
  })
  }
  */


  render(){
        return(
            <ScrollView>
               <SearchBar placeholder='type here... ' value={this.state.search} onChangeText={(text)=>{this.fetchdata(text)}} ></SearchBar>
                {this.state.allStories.map((allStories)=>{
                  return(
                    <View style={{borderBottomWidth:3}} >
                      <Text>{allStories.title}</Text>
                      <Text>{allStories.author}</Text>
                      <Text>{allStories.story}</Text>
                    </View>
                  )
                })}
            </ScrollView>
        );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});