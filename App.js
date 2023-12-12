/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { useState } from 'react';


function App() {

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [errors, setError] = useState({});

  const validateForm = () => {
    let errors = {} ;

    if(!userName) errors.userName = "UserName is Invalid" ;
    if(!passWord) errors.passWord = "Password is Invalid" ;

    setError(errors)
    return Object.keys(errors).length === 0 ;
  }

  const handleSubmit = () => {
    if(validateForm()){
      console.log("Submited" , userName ,passWord);
      setUserName("")
      setPassword("")
      setError({})
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding'  keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image source={require('./assets/img-1.png')} style={styles.image} />
        <Text style={styles.lable}>User Name</Text>
        <TextInput style={styles.input} placeholder='Enter Your UserName' value={userName} onChange={setUserName} />
        {
          errors.userName ? (<Text style={styles.errorText}>{errors.userName}</Text>) : null 
        }
        <Text style={styles.lable}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter Your Password' secureTextEntry value={passWord} onChange={setPassword} />
        {
          errors.passWord ? (<Text style={styles.errorText}>{errors.passWord}</Text> ): null 
        }
        <Button title='Login' onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    margin : 10 ,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5   //This is only for Android
  },
  lable: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image : {
    width : 200 ,
    height : 400 ,
    alignSelf : "center" ,
    marginBottom : 50 
  },
  errorText : {
    color : "red" ,
    marginBottom : 10
  }
});

export default App;
