import { Button, SearchBar } from "react-native-elements";
import { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";

import Login from "./Login";

let importantDatesInfo = [
      {key:"1", 
      date: "August 24",
      info: "First Day of Classes"
      },
      
      {key:"2",
      date: "August 31",
      info: "Drop/Add Deadline"
      },
  
      {key:"3", 
      date: "August 31",
      info: "Payment Deadline"
      },
  
      {key:"4",
      date: "December 20",
      info: "Last Day of Classes"
      }
];

function ImportantDates() {
    let [seeDates, setSeeDates] = useState(false)


    return (
        <View>
        <Button style={DatesStyles.button} onPress={() => setSeeDates(!seeDates)} title="View Important Dates"></Button>
        {seeDates ?
        (
        <>
            {importantDatesInfo.map(item => {
                return (
                    
                    <View key={item.id}>
                        <Text style={DatesStyles.welcomeMessage}>{item.info} - {item.date}</Text>
                    </View>
                )
            })}
        </>   
        ) : null},
        </View>
    )
}

const DatesStyles = StyleSheet.create({
    button: {
        marginLeft: 80,
        marginRight: 80,
        flex: 1,
        marginTop: 200,
    },
    welcomeMessage: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 15,
        fontSize: 15,
        marginBottom: 15,
    },
  });

  export default ImportantDates;
