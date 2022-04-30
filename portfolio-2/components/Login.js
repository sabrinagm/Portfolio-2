import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-native-elements';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ToDoList from './ToDoList';
import ImportantDates from './ImportantDates';
import NewUser from './NewUser';

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
            user=setUser
        }
        //If the password is incorrect, instead the user recieves an error.
        else{
            setErrorText("That password was incorrect, try again! Hint: 4639")
        }
    }, [passwordValue])

    const [date, setDate] = useState(null)

    useEffect(() => {
      let today= new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
      setDate(date);
    }, []);

    return(
        login ?
        <>
        <View>
        <Text style={loginStyles.loggedInMessage}>Welcome back, {user}! Happy studying!</Text>
        <Text>{'Current Date'} - {date}</Text>
        <ToDoList></ToDoList>
        <ImportantDates></ImportantDates>
        </View>
        </>
        :
        <View>
        <Text style={loginStyles.welcomeMessage}>Hello, please login below to access your study manager!</Text>
        <TextInput style={loginStyles.input} placeholder="Username" onChangeText={setUser}></TextInput>
        <TextInput style={loginStyles.input} onChangeText={setPasswordValue} value={passwordValue} placeholder="Password"></TextInput>
        <Button style={loginStyles.button} title="Login" onPress={loggingIn}></Button>
        <Text style={loginStyles.error}>{errorText}</Text>
        <NewUser></NewUser>
        <StatusBar style="auto" />
      </View>
    )
}

const loginStyles = StyleSheet.create({
    loggedInMessage: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
        fontSize: 15,
    },
    welcomeMessage: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 50,
        fontSize: 15,
        marginBottom: 15,
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
    error: {
      color: "red",
      textAlign: "center",
    },
    button: {
        marginLeft: 200,
        marginRight: 200,
    }
  });

export default Login