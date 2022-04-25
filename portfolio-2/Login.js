import {useCallback, useState} from 'react';
import { Button } from 'react-native-elements';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ToDoList from './ToDoList';

function Login() {
    //Sets the login state.
    let [login, setLogin] = useState(false)
    //Sets the state of the password.
    let [passwordValue, setPasswordValue] = useState("")
    //Sets the state of the password error text.
    let [errorText, setErrorText] = useState("")
    //Sets and calls the username to the welcome message.
    let [user, setUser] = useState("");

    let loggingIn = useCallback(() => {
        //If the entered password is equal to "4639", the password is correct and setLogin is set to true and the entered username value is saved
        if(passwordValue === "4639"){
            setLogin(true)
            user(setUser)
        }
        //If the password is incorrect, instead the user recieves an error.
        else{
            setErrorText("That password was incorrect, try again!")
        }
    }, [passwordValue])

    return(
        login ?
        <>
        <View>
            <Text style={loginStyles.welcomeMessage}>Welcome back to your to-do list, {user}!</Text>
            <ToDoList></ToDoList>
        </View>
        </>
        :
        <View>
        <Text style={loginStyles.welcomeMessage}>Hello, please login below!</Text>
        <TextInput style={loginStyles.input} placeholder="Username" onChangeText={setUser}></TextInput>
        <TextInput style={loginStyles.input} onChangeText={setPasswordValue} value={passwordValue} placeholder="Password"></TextInput>
        <Button style={loginStyles.button} title="Login" onPress={loggingIn}></Button>
        <Text>{errorText}</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const loginStyles = StyleSheet.create({
    welcomeMessage: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
        fontSize: 15,
    },
    input: {
      height: 40,
      marginRight: 80,
      marginLeft: 80,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorText: {
      color: "red",
    },
    button: {
        marginLeft: 80,
        marginRight: 80,
    }
  });

export default Login