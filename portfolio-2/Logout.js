import { Button } from "react-native-elements";
import { useState } from 'react';
import { View, StyleSheet } from "react-native";

import Login from "./Login";

function Logout() {
    let [logout, setLogout] = useState(false)

    if(logout == true) {
        <View>
            <Login></Login>
        </View>
    }

    return (
        <View>
        <Button style={logoutStyles.button} onPress={() => setLogout(true)}  title="Exit Application"></Button>
        </View>
    )
}

const logoutStyles = StyleSheet.create({
    button: {
        marginLeft: 80,
        marginRight: 80,
        flex: 1,
        marginTop: 200,
    },
  });

  export default Logout;
