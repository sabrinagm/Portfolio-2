
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { useState } from 'react';

let formData= [
   {placeholder: "First Name", label: "firstName", regex: /^[^\d=?\\/@#%^&*()]+$/, error: "Invalid name!"},
   {placeholder: "Last Name", label: "lastName", regex: /^[^\d=?\\/@#%^&*()]+$/, error: "Invalid name!"},
   {placeholder: "Phone Number", label: "phone", regex: /^\(\d{3}\) \d{3}-\d{4}$/, error: "Invalid phone number! Please enter in format (xxx) xxx-xxxx."},
   {placeholder: "Email", label: "email", regex: /^.+@.+\..+$/, error: "Invalid email!"},
]

function FormItem({ formItem, setValid, setValue }) {

   let [infoError, setInfoError] = useState("")

   let validate = (content, setInfoError) => {
      
            if (formItem.regex.test(content) && formItem!=undefined && formItem!="") {
               setValue(content)
               setValid(true)
               setInfoError("")
            }
            else {
               setValid(false)
               setInfoError(formItem.error)
            }
      }

   return(<>
   <TextInput style={welcomeStyle.textInput}
   onChangeText={(value) => validate(value, setInfoError)} 
   placeholder={formItem.placeholder}>
   </TextInput>
   <Text style={welcomeStyle.errorMessage}>{infoError}</Text>
   </>
   )
}

export default function NewUser() {
   let [valid, setValid] = useState(false)
   let [form, setForm] = useState({})

   const [initialButton, clickedButton] = useState("Submit")
   const textChange = (text) => clickedButton(text);



   return (
      <View>
         <Text style={welcomeStyle.welcomeMessage}>If you are a new user, please fill out form below!</Text>
         {formData.map(formItem => {
            return <FormItem setValue={(newValue=> {
            setForm(prevForm => {
               prevForm[formItem.label] = newValue
               return { ...prevForm }
            })
         })}setValid={value=>setValid(value)} formItem={formItem} value={form[formItem.label]}></FormItem>
         })}
         <Button style={welcomeStyle.newUserButton} title={initialButton} onPress={() => textChange(`Thank you for joining!`)} disabled={!valid}></Button>
      </View>
   );
}

const welcomeStyle = StyleSheet.create({
   welcomeMessage: {
       alignContent: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       flex: 1,
       marginTop: 50,
       fontSize: 15,
       marginBottom: 15,
   },
   textInput: {
     height: 40,
     marginRight: 80,
     marginLeft: 80,
     marginTop: 10,
     marginBottom: 10,
     borderWidth: 1,
     padding: 10,
   },
   newUserButton: {
       marginLeft: 200,
       marginRight: 200,
   },
   errorMessage: {
      color: "red",
      textAlign: "center",
    },
 });